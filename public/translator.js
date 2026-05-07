document.addEventListener('DOMContentLoaded', () => {
    const chineseInput = document.getElementById('chinese-input');
    const translateTextBtn = document.getElementById('translate-text-btn');
    const spanishOutput = document.getElementById('spanish-output');
    const statusMessage = document.getElementById('status-message');

    // --- Lógica para traducir texto ---
    translateTextBtn.addEventListener('click', async () => {
        const textToTranslate = chineseInput.value.trim();
        if (!textToTranslate) {
            statusMessage.textContent = 'Por favor, introduce texto para traducir.';
            statusMessage.style.color = 'var(--rojo-chino)';
            return;
        }

        statusMessage.textContent = 'Traduciendo...';
        statusMessage.style.color = 'var(--dorado-chino)';
        spanishOutput.textContent = ''; // Limpiar salida anterior

        try {
            const response = await fetch('/translate-text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: textToTranslate,
                    targetLanguage: 'es' // Traducir siempre a español
                }),
            });

            const data = await response.json();

            if (response.ok) {
                spanishOutput.textContent = data.translation;
                statusMessage.textContent = 'Traducción completada.';
                statusMessage.style.color = '#4CAF50';
            } else {
                statusMessage.textContent = `Error: ${data.error || 'No se pudo traducir el texto.'}`;
                statusMessage.style.color = 'var(--rojo-chino)';
                console.error('Error en la traducción:', data.details || data.error);
            }
        } catch (error) {
            statusMessage.textContent = 'Error de conexión con el servidor de traducción.';
            statusMessage.style.color = 'var(--rojo-chino)';
            console.error('Error de red o servidor:', error);
        }
    });

    // --- Lógica para grabar voz ---
    const recordBtn = document.getElementById('record-btn');
    const recordText = document.getElementById('record-text');
    const recordIcon = document.getElementById('record-icon');
    const whisperLangSelect = document.getElementById('whisper-lang-select');

    let isRecording = false;
    let mediaRecorder;
    let audioChunks = [];

    recordBtn.addEventListener('click', async () => {
        if (!isRecording) {
            // Iniciar grabación
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                audioChunks = [];

                mediaRecorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                };

                mediaRecorder.onstop = async () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    
                    // Mostrar reproductor de audio
                    const audioUrl = URL.createObjectURL(audioBlob);
                    const audioPlayer = document.getElementById('last-recording');
                    const audioContainer = document.getElementById('audio-playback-container');
                    if (audioPlayer && audioContainer) {
                        audioPlayer.src = audioUrl;
                        audioContainer.style.display = 'block';
                    }

                    statusMessage.textContent = 'Grabación finalizada. Procesando voz con Whisper...';
                    statusMessage.style.color = 'var(--dorado-chino)';
                    spanishOutput.textContent = '';

                    const formData = new FormData();
                    formData.append('audio', audioBlob, 'recording.webm');
                    formData.append('language', whisperLangSelect.value);

                    try {
                        const response = await fetch('/transcribe-audio', {
                            method: 'POST',
                            body: formData
                        });
                        const data = await response.json();

                        if (response.ok) {
                            chineseInput.value = data.transcription;
                            statusMessage.textContent = 'Voz transcrita. Traduciendo texto...';
                            statusMessage.style.color = 'var(--dorado-chino)';
                            // Traducir el texto transcrito automáticamente
                            translateTextBtn.click();
                        } else {
                            statusMessage.textContent = `Error Whisper: ${data.error || 'No se pudo transcribir.'}`;
                            statusMessage.style.color = 'var(--rojo-chino)';
                            console.error('Error en Whisper:', data.details || data.error);
                        }
                    } catch (error) {
                        statusMessage.textContent = 'Error de conexión con el servidor de transcripción.';
                        statusMessage.style.color = 'var(--rojo-chino)';
                        console.error('Error de red o servidor:', error);
                    }
                };

                mediaRecorder.start();
                isRecording = true;
                recordText.textContent = 'Detener Grabación';
                recordIcon.textContent = '🔴';
                recordBtn.classList.add('recording');
                statusMessage.textContent = 'Grabando...';
                statusMessage.style.color = 'var(--rojo-chino)';
            } catch (err) {
                console.error('Error al acceder al micrófono:', err);
                statusMessage.textContent = 'Error: No se pudo acceder al micrófono.';
                statusMessage.style.color = 'var(--rojo-chino)';
            }
        } else {
            // Detener grabación
            mediaRecorder.stop();
            isRecording = false;
            recordText.textContent = 'Grabar Voz';
            recordIcon.textContent = '🎤';
            recordBtn.classList.remove('recording');
        }
    });
});
