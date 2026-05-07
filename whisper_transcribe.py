import whisper
import sys
import os
import warnings

# Ignorar advertencias de FP16 y similares
warnings.filterwarnings("ignore")

# Forzar salida en UTF-8 para evitar problemas de caracteres chinos en Windows PowerShell
sys.stdout.reconfigure(encoding='utf-8')

def transcribe_audio(audio_path, language):
    try:
        file_size = os.path.getsize(audio_path)
        print(f"[Python] Iniciando transcripción. Tamaño del archivo: {file_size} bytes", file=sys.stderr)
        
        if file_size < 100:
            return "[Error] Archivo de audio demasiado pequeño o vacío."

        # Cargar el modelo de Whisper (puedes elegir 'tiny', 'base', 'small', 'medium', 'large')
        model = whisper.load_model("base")
        
        # Transcribir el audio. fp16=False evita el bug de output vacío en CPUs Windows
        result = model.transcribe(audio_path, language=language, fp16=False)
        
        return result["text"]
    except Exception as e:
        return f"Error al transcribir: {e}"

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python whisper_transcribe.py <ruta_audio> <idioma>")
        sys.exit(1)
    
    audio_file_path = sys.argv[1]
    lang = sys.argv[2]

    if not os.path.exists(audio_file_path):
        print(f"Error: El archivo de audio no existe en {audio_file_path}")
        sys.exit(1)

    transcription = transcribe_audio(audio_file_path, lang)
    print(transcription)
