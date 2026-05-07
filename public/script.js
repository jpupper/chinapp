// --- TABS LOGIC ---
function openTab(evt, tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Variables de estado
let selectedZh = null;
let selectedEs = null;
let matchedPairs = 0;
let currentExerciseData = [];

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('match-game')) {
        initMatchGame();
        setTimeout(() => {
            initFillBlanks();
            initBuilder();
            initSpeakExercise();
        }, 100); // Dar tiempo a que cargue el vocabulario
    }
});

// --- LÓGICA: UNIR FLECHAS ---
function initMatchGame() {
    const zhContainer = document.getElementById('chinese-words');
    const esContainer = document.getElementById('spanish-words');
    
    // Limpiar contenedores y lineas SVG
    zhContainer.innerHTML = '';
    esContainer.innerHTML = '';
    const svg = document.getElementById('lines-svg');
    if (svg) svg.innerHTML = '';

    document.getElementById('match-message').innerText = '';
    document.getElementById('match-message').className = 'message';
    
    selectedZh = null;
    selectedEs = null;
    matchedPairs = 0;

    // Seleccionar 5 pares aleatorios del diccionario para este ejercicio
    currentExerciseData = getRandomItems(dictionaryData, 5);

    // Crear arrays desordenados independientes
    const zhWords = [...currentExerciseData].sort(() => Math.random() - 0.5);
    const esWords = [...currentExerciseData].sort(() => Math.random() - 0.5);

    // Generar botones Chino/Pinyin
    zhWords.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'match-btn zh-btn';
        btn.innerText = item.zh;
        btn.dataset.id = item.id;
        btn.onclick = () => selectWord(btn, 'zh');
        zhContainer.appendChild(btn);
    });

    // Generar botones Español/Significado
    esWords.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'match-btn es-btn';
        btn.innerText = item.es;
        btn.dataset.id = item.id;
        btn.onclick = () => selectWord(btn, 'es');
        esContainer.appendChild(btn);
    });
}

function getRandomItems(array, num) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function selectWord(btn, type) {
    // Si ya está emparejado, no hacer nada
    if (btn.classList.contains('matched')) return;

    // Deseleccionar el anterior del mismo grupo
    document.querySelectorAll(`.${type}-btn`).forEach(b => {
        if(!b.classList.contains('matched')) b.classList.remove('selected');
    });

    // Seleccionar el actual
    btn.classList.add('selected');

    if (type === 'zh') selectedZh = btn;
    if (type === 'es') selectedEs = btn;

    // Si hay uno de cada lado seleccionado, comprobar
    if (selectedZh && selectedEs) {
        checkMatch();
    }
}

function checkMatch() {
    const msgEl = document.getElementById('match-message');

    if (selectedZh.dataset.id === selectedEs.dataset.id) {
        // MATCH CORRECTO
        selectedZh.classList.remove('selected');
        selectedEs.classList.remove('selected');
        selectedZh.classList.add('matched');
        selectedEs.classList.add('matched');
        
        // Dibujar linea física
        drawLine(selectedZh, selectedEs);
        
        matchedPairs++;
        msgEl.innerText = '¡Excelente! ✨';
        msgEl.className = 'message msg-success';

        // Comprobar si ganó
        if (matchedPairs === currentExerciseData.length) {
            msgEl.innerText = '¡Felicitaciones! Has completado esta ronda. 🎉';
        }
        
        // Reset variables
        selectedZh = null;
        selectedEs = null;

    } else {
        // MATCH INCORRECTO
        selectedZh.classList.add('error-shake');
        selectedEs.classList.add('error-shake');
        msgEl.innerText = 'Intenta de nuevo... ❌';
        msgEl.className = 'message msg-error';

        // Guardar referencia para quitar clases luego del timeout
        const tempZh = selectedZh;
        const tempEs = selectedEs;

        selectedZh = null;
        selectedEs = null;

        setTimeout(() => {
            tempZh.classList.remove('selected', 'error-shake');
            tempEs.classList.remove('selected', 'error-shake');
            if(msgEl.innerText.includes('Intenta')) {
                msgEl.innerText = '';
            }
        }, 800);
    }
}

function drawLine(btn1, btn2) {
    const svg = document.getElementById('lines-svg');
    if (!svg) return;
    const container = document.getElementById('match-game');
    
    // btn1 es zh (izq), btn2 es es (der)
    const isZhLeft = btn1.classList.contains('zh-btn');
    const leftBtn = isZhLeft ? btn1 : btn2;
    const rightBtn = isZhLeft ? btn2 : btn1;
    
    const containerRect = container.getBoundingClientRect();
    const leftRect = leftBtn.getBoundingClientRect();
    const rightRect = rightBtn.getBoundingClientRect();
    
    // Coordenadas relativas al contenedor
    const x1 = leftRect.right - containerRect.left;
    const y1 = leftRect.top + (leftRect.height / 2) - containerRect.top;
    
    const x2 = rightRect.left - containerRect.left;
    const y2 = rightRect.top + (rightRect.height / 2) - containerRect.top;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#F1C40F'); // Dorado chino
    line.setAttribute('stroke-width', '3');
    line.setAttribute('stroke-linecap', 'round');
    // Animación simple de aparición
    line.style.opacity = '0';
    line.style.transition = 'opacity 0.3s ease-in';
    
    svg.appendChild(line);
    
    // Trigger animation
    setTimeout(() => line.style.opacity = '1', 50);
}

function resetMatchGame() {
    initMatchGame();
}

// --- LÓGICA: COMPLETAR FRASES ---
let currentFillPhrases = [];

function cleanWord(str) {
    // Elimina acentos/tonos (pinyin) y signos de puntuación, y pasa a minúsculas
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,!?¿¡()]/g, "").toLowerCase().trim();
}

function initFillBlanks() {
    const container = document.getElementById('fill-blanks-container');
    if (!container) return;
    
    container.innerHTML = '';
    currentFillPhrases = [];
    
    // Resetear mensaje
    const msgEl = document.getElementById('fill-message');
    if (msgEl) {
        msgEl.innerText = '';
        msgEl.className = 'message';
    }

    // Generar 2 frases usando el diccionario fijo (fixedPhrases)
    if (typeof fixedPhrases === 'undefined') return;
    
    // Mezclar frases fijas
    const shuffledPhrases = [...fixedPhrases].sort(() => 0.5 - Math.random());
    const selectedPhrases = shuffledPhrases.slice(0, 2);

    // Obtener todas las palabras posibles para los distractores
    const allWords = [...new Set(fixedPhrases.flatMap(p => p.zh.split(' ')))];

    for (let i = 0; i < 2; i++) {
        // Obtenemos una frase completa generada aleatoriamente
        const phraseData = selectedPhrases[i];
        
        // Separamos la frase en chino por espacios
        const words = phraseData.zh.split(' ');
        // Elegimos una palabra al azar para ocultar
        const hiddenIndex = Math.floor(Math.random() * words.length);
        const hiddenWord = words[hiddenIndex];
        
        // Seleccionar 3 distractores al azar
        let distractors = allWords.filter(w => w !== hiddenWord).sort(() => 0.5 - Math.random()).slice(0, 3);
        let options = [hiddenWord, ...distractors].sort(() => 0.5 - Math.random());
        
        // Guardar respuesta correcta
        currentFillPhrases.push({
            answer: hiddenWord,
            selectedIndex: null,
            options: options
        });

        // Crear la frase visual con el input
        let displayHtml = '';
        words.forEach((w, idx) => {
            if (idx === hiddenIndex) {
                displayHtml += `<span id="blank-spot-${i}" class="blank-spot">___</span> <span id="fill-feedback-${i}" style="font-size: 1rem; margin-left: 5px;"></span> `;
            } else {
                displayHtml += `<span>${w}</span> `;
            }
        });

        let optionsHtml = options.map((opt, optIdx) => 
            `<button class="option-btn" id="opt-btn-${i}-${optIdx}" onclick="selectFillOption(${i}, ${optIdx}, '${opt.replace(/'/g, "\\'")}')">${opt}</button>`
        ).join('');

        const item = document.createElement('div');
        item.className = 'fill-blank-item';
        item.innerHTML = `
            <p style="margin-bottom: 8px; font-size: 1.2rem; color: var(--dorado-chino); font-weight: 600;">${displayHtml}</p>
            <p style="color: var(--texto-secundario); font-style: italic; margin-bottom: 15px;">Traducción: "${phraseData.es}"</p>
            <div class="options-group">${optionsHtml}</div>
        `;
        container.appendChild(item);
    }
}

function selectFillOption(phraseIdx, optIdx, word) {
    currentFillPhrases[phraseIdx].selectedIndex = optIdx;
    
    // Actualizar visualmente el espacio en blanco
    document.getElementById(`blank-spot-${phraseIdx}`).innerText = word;
    document.getElementById(`blank-spot-${phraseIdx}`).style.color = '#FFF';
    document.getElementById(`blank-spot-${phraseIdx}`).style.borderBottomColor = 'transparent';
    
    // Actualizar botones
    for(let j=0; j<4; j++) {
        let btn = document.getElementById(`opt-btn-${phraseIdx}-${j}`);
        if(btn) btn.classList.remove('selected');
    }
    document.getElementById(`opt-btn-${phraseIdx}-${optIdx}`).classList.add('selected');
}

function checkFillBlanks() {
    const msgEl = document.getElementById('fill-message');
    let allCorrect = true;
    let anyEmpty = false;

    for (let i = 0; i < currentFillPhrases.length; i++) {
        const feedbackEl = document.getElementById(`fill-feedback-${i}`);
        const selectedIdx = currentFillPhrases[i].selectedIndex;
        const correctVal = currentFillPhrases[i].answer;

        if (selectedIdx === null) {
            anyEmpty = true;
            feedbackEl.innerHTML = '';
            continue;
        }

        const userVal = currentFillPhrases[i].options[selectedIdx];

        if (userVal === correctVal) {
            feedbackEl.innerHTML = '✅';
        } else {
            feedbackEl.innerHTML = `❌ <span style="color:#E57373; font-size:0.9rem;">(Era: ${correctVal})</span>`;
            allCorrect = false;
        }
    }

    if (anyEmpty) {
        msgEl.innerText = 'Por favor, completa todos los espacios antes de comprobar. ⚠️';
        msgEl.className = 'message msg-error';
        return;
    }

    if (allCorrect) {
        msgEl.innerText = '¡Perfecto! Todas las frases están completas y correctas. 🎓';
        msgEl.className = 'message msg-success';
    } else {
        msgEl.innerText = 'Hay errores en algunas frases. Revisa la corrección al lado de cada una. 🤔';
        msgEl.className = 'message msg-error';
    }
}

// --- LÓGICA: ARMAR ORACIONES ---
let builderPhrase = null;
let builderScrambled = [];
let builderConstructed = [];

function initBuilder() {
    const msgEl = document.getElementById('build-message');
    if (msgEl) { msgEl.innerText = ''; msgEl.className = 'message'; }

    if (typeof fixedPhrases === 'undefined') return;

    // Seleccionar 1 frase al azar
    const shuffledPhrases = [...fixedPhrases].sort(() => 0.5 - Math.random());
    builderPhrase = shuffledPhrases[0];
    
    builderConstructed = [];
    builderScrambled = builderPhrase.zh.split(' ').map((w, idx) => ({ id: idx, word: w })).sort(() => 0.5 - Math.random());

    document.getElementById('build-translation').innerText = `"${builderPhrase.es}"`;
    
    renderBuilder();
}

function renderBuilder() {
    const constructedArea = document.getElementById('build-constructed');
    const scrambledArea = document.getElementById('build-scrambled');
    
    constructedArea.innerHTML = '';
    scrambledArea.innerHTML = '';

    builderConstructed.forEach((item, idx) => {
        let btn = document.createElement('button');
        btn.className = 'word-chip';
        btn.innerText = item.word;
        btn.onclick = () => {
            builderConstructed.splice(idx, 1);
            builderScrambled.push(item);
            renderBuilder();
        };
        constructedArea.appendChild(btn);
    });

    builderScrambled.forEach((item, idx) => {
        let btn = document.createElement('button');
        btn.className = 'word-chip';
        btn.innerText = item.word;
        btn.onclick = () => {
            builderScrambled.splice(idx, 1);
            builderConstructed.push(item);
            renderBuilder();
        };
        scrambledArea.appendChild(btn);
    });
}

function checkBuilder() {
    const msgEl = document.getElementById('build-message');
    
    if (builderConstructed.length !== builderPhrase.zh.split(' ').length) {
        msgEl.innerText = '⚠️ Usa todas las palabras para armar la oración.';
        msgEl.className = 'message msg-error';
        return;
    }

    const userSentence = builderConstructed.map(i => i.word).join(' ');
    
    if (userSentence === builderPhrase.zh) {
        msgEl.innerText = '¡Perfecto! Oración armada correctamente. ✅';
        msgEl.className = 'message msg-success';
        
        // Poner los chips en verde
        document.querySelectorAll('#build-constructed .word-chip').forEach(btn => {
            btn.style.backgroundColor = '#4CAF50';
            btn.style.borderColor = '#4CAF50';
        });
    } else {
        msgEl.innerText = 'El orden no es correcto. Intenta de nuevo. ❌';
        msgEl.className = 'message msg-error';
        
        // Poner los chips en rojo temporalmente
        document.querySelectorAll('#build-constructed .word-chip').forEach(btn => {
            btn.style.backgroundColor = '#E57373';
            btn.style.borderColor = '#E57373';
            setTimeout(() => {
                btn.style.backgroundColor = 'var(--fondo-tarjeta)';
                btn.style.borderColor = 'var(--borde)';
            }, 800);
        });
    }
}

// --- LÓGICA: LEER EN VOZ ALTA ---
let speakPhrase = null;
let isSpeakingRecording = false;
let speakMediaRecorder;
let speakAudioChunks = [];

function initSpeakExercise() {
    const msgEl = document.getElementById('speak-message');
    if (msgEl) { msgEl.innerText = ''; msgEl.className = 'message'; }
    document.getElementById('speak-transcription').innerText = '...';

    if (typeof fixedPhrases === 'undefined') return;

    // Seleccionar 1 frase al azar corta (menos de 5 palabras)
    const shortPhrases = fixedPhrases.filter(p => p.zh.split(' ').length <= 4);
    const shuffled = [...shortPhrases].sort(() => 0.5 - Math.random());
    speakPhrase = shuffled[0];
    
    document.getElementById('speak-target-zh').innerText = speakPhrase.zh;
    document.getElementById('speak-target-es').innerText = `"${speakPhrase.es}"`;
    
    setupSpeakRecorder();
}

function playChineseAudio() {
    if (!speakPhrase) return;
    
    // Usar la API de síntesis de voz del navegador
    const utterance = new SpeechSynthesisUtterance(speakPhrase.zh);
    utterance.lang = 'zh-CN'; // Chino mandarín
    utterance.rate = 0.85; // Un poco más lento para aprender
    
    window.speechSynthesis.speak(utterance);
}

function setupSpeakRecorder() {
    const recordBtn = document.getElementById('btn-record-speak');
    const recordIcon = document.getElementById('icon-record-speak');
    const msgEl = document.getElementById('speak-message');
    const transEl = document.getElementById('speak-transcription');

    // Removemos event listeners anteriores clonando el boton
    const newRecordBtn = recordBtn.cloneNode(true);
    recordBtn.parentNode.replaceChild(newRecordBtn, recordBtn);

    newRecordBtn.addEventListener('click', async () => {
        if (!isSpeakingRecording) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                speakMediaRecorder = new MediaRecorder(stream);
                speakAudioChunks = [];

                speakMediaRecorder.ondataavailable = e => speakAudioChunks.push(e.data);

                speakMediaRecorder.onstop = async () => {
                    const audioBlob = new Blob(speakAudioChunks, { type: 'audio/webm' });
                    msgEl.innerText = 'Procesando tu voz con IA...';
                    msgEl.className = 'message';
                    msgEl.style.color = 'var(--dorado-chino)';
                    
                    const formData = new FormData();
                    formData.append('audio', audioBlob, 'speak.webm');
                    formData.append('language', 'zh');

                    try {
                        const response = await fetch('/transcribe-audio', {
                            method: 'POST',
                            body: formData
                        });
                        const data = await response.json();

                        if (response.ok) {
                            const transcription = data.transcription;
                            transEl.innerText = transcription;
                            
                            // Limpiamos ambos textos para compararlos
                            const cleanTarget = cleanWord(speakPhrase.zh).replace(/\s/g, '');
                            const cleanTrans = cleanWord(transcription).replace(/\s/g, '');
                            
                            // Logica de comparacion tolerante
                            if (cleanTrans === cleanTarget || cleanTrans.includes(cleanTarget) || (cleanTarget.includes(cleanTrans) && cleanTrans.length > 2)) {
                                msgEl.innerText = '¡Excelente pronunciación! ✅';
                                msgEl.className = 'message msg-success';
                            } else {
                                msgEl.innerText = 'Casi lo tienes, intenta pronunciarlo más claro. ❌';
                                msgEl.className = 'message msg-error';
                            }
                        } else {
                            msgEl.innerText = `Error de Whisper: ${data.error}`;
                            msgEl.className = 'message msg-error';
                        }
                    } catch (error) {
                        msgEl.innerText = 'Error de conexión con el servidor.';
                        msgEl.className = 'message msg-error';
                    }
                };

                speakMediaRecorder.start();
                isSpeakingRecording = true;
                newRecordBtn.innerHTML = '<span id="icon-record-speak">🔴</span> Detener Grabación';
                newRecordBtn.style.backgroundColor = '#E57373';
                msgEl.innerText = 'Grabando... habla ahora.';
                msgEl.className = 'message';
                msgEl.style.color = 'var(--rojo-chino)';
            } catch (err) {
                console.error(err);
                msgEl.innerText = 'No se pudo acceder al micrófono.';
                msgEl.className = 'message msg-error';
            }
        } else {
            speakMediaRecorder.stop();
            isSpeakingRecording = false;
            newRecordBtn.innerHTML = '<span id="icon-record-speak">🎤</span> Grabar mi voz';
            newRecordBtn.style.backgroundColor = '#4CAF50';
        }
    });
}