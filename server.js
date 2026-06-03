const express = require('express');
const path = require('path');
const translate = require('translate-google'); // Libreria de traduccion gratuita sin API KEY
const multer = require('multer'); // Para manejar la subida de archivos
const { spawn } = require('child_process'); // Para ejecutar scripts de Python
const fs = require('fs'); // Para manejar archivos
const https = require('https'); // Para el proxy TTS
const app = express();
const port = 6875;

// Middleware para parsear JSON en las peticiones
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
    res.json({ ok: true, voice: true });
});

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


// Endpoint proxy para Google Translate TTS
// Usa el módulo https nativo para mayor compatibilidad
app.get('/tts', (req, res) => {
    const text = req.query.text;
    if (!text) {
        return res.status(400).json({ error: 'Falta el parámetro text.' });
    }

    const params = new URLSearchParams({
        ie: 'UTF-8',
        q: text,
        tl: 'zh-CN',
        client: 'tw-ob',
        ttsspeed: '0.8'
    });

    const options = {
        hostname: 'translate.google.com',
        path: `/translate_tts?${params.toString()}`,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://translate.google.com/',
            'Accept': 'audio/mpeg, audio/*',
        }
    };

    console.log(`[/tts] Solicitando audio para: "${text}"`);

    const request = https.get(options, (googleRes) => {
        console.log(`[/tts] Respuesta de Google: ${googleRes.statusCode}`);

        // Seguir redirecciones manualmente si las hay
        if (googleRes.statusCode === 301 || googleRes.statusCode === 302) {
            console.log(`[/tts] Redirigiendo a: ${googleRes.headers.location}`);
            return res.status(502).json({ error: 'Redirección inesperada de Google TTS.' });
        }

        if (googleRes.statusCode !== 200) {
            return res.status(502).json({ error: `Google TTS respondió con código ${googleRes.statusCode}` });
        }

        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        googleRes.pipe(res); // Transmitir el audio directamente al cliente
        console.log(`[/tts] Transmitiendo audio para: "${text}"`);
    });

    request.on('error', (error) => {
        console.error(`[/tts] Error de red: ${error.code} - ${error.message}`);
        res.status(500).json({ error: 'Error de red al contactar Google TTS.', code: error.code, details: error.message });
    });

    request.setTimeout(8000, () => {
        console.error('[/tts] Timeout al contactar Google TTS.');
        request.destroy();
        res.status(504).json({ error: 'Timeout al contactar Google TTS.' });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
