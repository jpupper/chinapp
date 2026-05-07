const express = require('express');
const path = require('path');
const translate = require('translate-google'); // Libreria de traduccion gratuita sin API KEY
const multer = require('multer'); // Para manejar la subida de archivos
const { spawn } = require('child_process'); // Para ejecutar scripts de Python
const fs = require('fs'); // Para manejar archivos
const app = express();
const port = 6875;

// Middleware para parsear JSON en las peticiones
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// --- Configuración de Multer para subida de audio ---
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.webm')
    }
});
const upload = multer({ storage: storage });

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint para traducir texto
app.post('/translate-text', async (req, res) => {
    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
        return res.status(400).json({ error: 'Faltan parámetros: text y targetLanguage son requeridos.' });
    }

    try {
        const result = await translate(text, {to: targetLanguage});
        res.json({ translation: result });
    } catch (error) {
        console.error('Error al traducir texto:', error);
        res.status(500).json({ error: 'Error en el servidor al traducir texto.', details: error.message });
    }
});

// Endpoint para transcribir audio con Whisper
app.post('/transcribe-audio', upload.single('audio'), (req, res) => {
    console.log('[/transcribe-audio] Petición recibida.');
    if (!req.file) {
        console.error('[/transcribe-audio] Error: No se ha subido ningún archivo de audio.');
        return res.status(400).json({ error: 'No se ha subido ningún archivo de audio.' });
    }

    const audioFilePath = req.file.path;
    const fileSize = req.file.size;
    const language = req.body.language || 'zh';
    console.log(`[/transcribe-audio] Archivo de audio recibido: ${audioFilePath}, Tamaño: ${fileSize} bytes, Idioma: ${language}`);

    // Ejecutar el script de Python de Whisper
    const pythonProcess = spawn('python', ['whisper_transcribe.py', audioFilePath, language]);
    console.log(`[/transcribe-audio] Ejecutando script Python: python whisper_transcribe.py ${audioFilePath} ${language}`);

    let transcription = '';
    let errorOutput = '';

    pythonProcess.stdout.on('data', (data) => {
        transcription += data.toString();
        console.log(`[/transcribe-audio] Salida de Python (stdout): ${data.toString().trim()}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
        console.error(`[/transcribe-audio] Salida de Python (stderr): ${data.toString().trim()}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`[/transcribe-audio] Proceso Python cerrado con código: ${code}`);
        // Eliminar el archivo de audio temporal
        fs.unlink(audioFilePath, (err) => {
            if (err) console.error('[/transcribe-audio] Error al eliminar archivo de audio temporal:', err);
            else console.log(`[/transcribe-audio] Archivo temporal eliminado: ${audioFilePath}`);
        });

        if (code !== 0) {
            console.error(`[/transcribe-audio] Error en el script de Python (Whisper): ${errorOutput}`);
            return res.status(500).json({ error: 'Error al transcribir el audio con Whisper.', details: errorOutput });
        }
        
        transcription = transcription.trim();
        console.log(`[/transcribe-audio] Transcripción final: "${transcription}"`);
        res.json({ transcription: transcription });
    });
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
