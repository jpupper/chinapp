// DICCIONARIO CENTRALIZADO EXTRAÍDO DEL EXCEL DE PACHU

const dictionaryData = [
    {
        "id": 1,
        "zh": "Mā",
        "es": "Mamá",
        "categoria": "Tonos"
    },
    {
        "id": 2,
        "zh": "1° Tono",
        "es": "Alto y plano, como cantar una nota sostenida",
        "categoria": "Tonos"
    },
    {
        "id": 3,
        "zh": "Má",
        "es": "Cáñamo",
        "categoria": "Tonos"
    },
    {
        "id": 4,
        "zh": "2° Tono",
        "es": "Sube, como cuando preguntás \"¿Ah?\"",
        "categoria": "Tonos"
    },
    {
        "id": 5,
        "zh": "Mǎ",
        "es": "Caballo",
        "categoria": "Tonos"
    },
    {
        "id": 6,
        "zh": "3° Tono",
        "es": "Baja primero y luego sube (forma de U)",
        "categoria": "Tonos"
    },
    {
        "id": 7,
        "zh": "Mà",
        "es": "Insultar / Regañar",
        "categoria": "Tonos"
    },
    {
        "id": 8,
        "zh": "4° Tono",
        "es": "Cae fuerte, como dando una orden",
        "categoria": "Tonos"
    },
    {
        "id": 9,
        "zh": "ma",
        "es": "Partícula interrogativa",
        "categoria": "Tonos"
    },
    {
        "id": 10,
        "zh": "Tono Neutro",
        "es": "Corto y suave, sin acento ni énfasis",
        "categoria": "Tonos"
    },
    {
        "id": 11,
        "zh": "Wǒ hē chá (Uó je cha)",
        "es": "Yo bebo té",
        "categoria": "Estructuras"
    },
    {
        "id": 12,
        "zh": "Wǒ míngtiān zài jiā chī fàn (Uó ming-tien tsai chia chi fan)",
        "es": "Yo mañana en casa como comida",
        "categoria": "Estructuras"
    },
    {
        "id": 13,
        "zh": "Wǒ yě xǐhuan kāfēi (Uó ie shi-juan ka-fei)",
        "es": "Yo también quiero café",
        "categoria": "Estructuras"
    },
    {
        "id": 14,
        "zh": "Nǐ xǐhuan tā ma? (Ni shi-juan ta ma?)",
        "es": "¿Te gusta él?",
        "categoria": "Estructuras"
    },
    {
        "id": 15,
        "zh": "Nǐ xǐhuan shénme? (Ni shi-juan shen-me?)",
        "es": "¿Qué te gusta?",
        "categoria": "Estructuras"
    },
    {
        "id": 16,
        "zh": "Wǒ de lǎoshī (Uó te lao-shi)",
        "es": "Mi profesor",
        "categoria": "Estructuras"
    },
    {
        "id": 17,
        "zh": "Tā hěn cōngmíng (Ta jen tsong-ming)",
        "es": "Él es inteligente",
        "categoria": "Estructuras"
    },
    {
        "id": 18,
        "zh": "Wǒ bù hē píjiǔ (Uó pu je pi-chiou)",
        "es": "Yo no bebo cerveza",
        "categoria": "Estructuras"
    },
    {
        "id": 19,
        "zh": "Wǒ méi yǒu qián (Uó mei you chian)",
        "es": "Yo no tengo dinero",
        "categoria": "Estructuras"
    },
    {
        "id": 20,
        "zh": "Nǐ hē bù hē chá? (Ni je pu je cha?)",
        "es": "¿Bebes o no bebes té?",
        "categoria": "Estructuras"
    },
    {
        "id": 21,
        "zh": "hěn",
        "es": "Muy",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 22,
        "zh": "yě bù",
        "es": "Tampoco",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 23,
        "zh": "yě",
        "es": "También",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 24,
        "zh": "bù",
        "es": "No",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 25,
        "zh": "méi",
        "es": "No (tener)",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 26,
        "zh": "hé",
        "es": "Y / Con",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 27,
        "zh": "yǐqián",
        "es": "Antes",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 28,
        "zh": "nǐ ne?",
        "es": "¿Y a vos?",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 29,
        "zh": "de",
        "es": "(Posesivo)",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 30,
        "zh": "ma",
        "es": "(Pregunta)",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 31,
        "zh": "ne",
        "es": "¿Y...?",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 32,
        "zh": "zhè",
        "es": "Esto / Este",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 33,
        "zh": "nà",
        "es": "Eso / Ese",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 34,
        "zh": "shénme",
        "es": "Qué",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 35,
        "zh": "shéi",
        "es": "Quién",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 36,
        "zh": "duōshǎo",
        "es": "¿Cuánto?",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 37,
        "zh": "nǎlǐ",
        "es": "¿Dónde?",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 38,
        "zh": "nǎr",
        "es": "¿Dónde?",
        "categoria": "Gramática y Partículas"
    },
    {
        "id": 39,
        "zh": "Wǒ",
        "es": "Yo",
        "categoria": "Pronombres"
    },
    {
        "id": 40,
        "zh": "Nǐ",
        "es": "Tú / Vos",
        "categoria": "Pronombres"
    },
    {
        "id": 41,
        "zh": "Nín",
        "es": "Usted",
        "categoria": "Pronombres"
    },
    {
        "id": 42,
        "zh": "Tā",
        "es": "Él / Ella / Ello",
        "categoria": "Pronombres"
    },
    {
        "id": 43,
        "zh": "Wǒmen",
        "es": "Nosotros",
        "categoria": "Pronombres"
    },
    {
        "id": 44,
        "zh": "Nǐmen",
        "es": "Ustedes",
        "categoria": "Pronombres"
    },
    {
        "id": 45,
        "zh": "Tāmen",
        "es": "Ellos / Ellas",
        "categoria": "Pronombres"
    },
    {
        "id": 46,
        "zh": "Tiào",
        "es": "Bailar",
        "categoria": "Verbos"
    },
    {
        "id": 47,
        "zh": "Xià",
        "es": "Bajar",
        "categoria": "Verbos"
    },
    {
        "id": 48,
        "zh": "Hē",
        "es": "Beber",
        "categoria": "Verbos"
    },
    {
        "id": 49,
        "zh": "Chī",
        "es": "Comer",
        "categoria": "Verbos"
    },
    {
        "id": 50,
        "zh": "Zài",
        "es": "Estar / En",
        "categoria": "Verbos"
    },
    {
        "id": 51,
        "zh": "Xuéxí",
        "es": "Estudiar",
        "categoria": "Verbos"
    },
    {
        "id": 52,
        "zh": "Xǐhuan",
        "es": "Gustar",
        "categoria": "Verbos"
    },
    {
        "id": 53,
        "zh": "Shuō",
        "es": "Hablar",
        "categoria": "Verbos"
    },
    {
        "id": 54,
        "zh": "Qù",
        "es": "Ir",
        "categoria": "Verbos"
    },
    {
        "id": 55,
        "zh": "Dào",
        "es": "Llegar",
        "categoria": "Verbos"
    },
    {
        "id": 56,
        "zh": "Kěyǐ",
        "es": "Poder",
        "categoria": "Verbos"
    },
    {
        "id": 57,
        "zh": "Yào",
        "es": "Querer",
        "categoria": "Verbos"
    },
    {
        "id": 58,
        "zh": "Xiǎng",
        "es": "Querer",
        "categoria": "Verbos"
    },
    {
        "id": 59,
        "zh": "Zhīdào",
        "es": "Saber",
        "categoria": "Verbos"
    },
    {
        "id": 60,
        "zh": "Huì",
        "es": "Saber realizar algo",
        "categoria": "Verbos"
    },
    {
        "id": 61,
        "zh": "Zuò",
        "es": "Sentarse / Tomar Transporte",
        "categoria": "Verbos"
    },
    {
        "id": 62,
        "zh": "Shì",
        "es": "Ser",
        "categoria": "Verbos"
    },
    {
        "id": 63,
        "zh": "Shàng",
        "es": "Subir",
        "categoria": "Verbos"
    },
    {
        "id": 64,
        "zh": "Yǒu",
        "es": "Tener",
        "categoria": "Verbos"
    },
    {
        "id": 65,
        "zh": "Lái",
        "es": "Venir",
        "categoria": "Verbos"
    },
    {
        "id": 66,
        "zh": "Kàn",
        "es": "Ver / Mirar",
        "categoria": "Verbos"
    },
    {
        "id": 67,
        "zh": "Cōngmíng",
        "es": "Inteligente",
        "categoria": "Adjetivos"
    },
    {
        "id": 68,
        "zh": "Lèi",
        "es": "Cansado",
        "categoria": "Adjetivos"
    },
    {
        "id": 69,
        "zh": "Měi",
        "es": "Lindo",
        "categoria": "Adjetivos"
    },
    {
        "id": 70,
        "zh": "Guì",
        "es": "Caro",
        "categoria": "Adjetivos"
    },
    {
        "id": 71,
        "zh": "Jiǎde",
        "es": "Falso",
        "categoria": "Adjetivos"
    },
    {
        "id": 72,
        "zh": "Yǒuqù",
        "es": "Interesante / Divertido",
        "categoria": "Adjetivos"
    },
    {
        "id": 73,
        "zh": "Zuì hǎo de",
        "es": "El mejor",
        "categoria": "Adjetivos"
    },
    {
        "id": 74,
        "zh": "Zuì bù hǎo de",
        "es": "El peor",
        "categoria": "Adjetivos"
    },
    {
        "id": 75,
        "zh": "Rén",
        "es": "Persona",
        "categoria": "Sustantivos"
    },
    {
        "id": 76,
        "zh": "Qián",
        "es": "Dinero",
        "categoria": "Sustantivos"
    },
    {
        "id": 77,
        "zh": "Lǎoshī",
        "es": "Profesor",
        "categoria": "Sustantivos"
    },
    {
        "id": 78,
        "zh": "Xuéshēng",
        "es": "Estudiante",
        "categoria": "Sustantivos"
    },
    {
        "id": 79,
        "zh": "Lǎobǎn",
        "es": "Jefe",
        "categoria": "Sustantivos"
    },
    {
        "id": 80,
        "zh": "Mìshū",
        "es": "Secretario/a",
        "categoria": "Sustantivos"
    },
    {
        "id": 81,
        "zh": "Yíngyèyuán",
        "es": "Vendedor",
        "categoria": "Sustantivos"
    },
    {
        "id": 82,
        "zh": "Péngyǒu",
        "es": "Amigo",
        "categoria": "Sustantivos"
    },
    {
        "id": 83,
        "zh": "Xiānshēng",
        "es": "Señor",
        "categoria": "Sustantivos"
    },
    {
        "id": 84,
        "zh": "Xiǎojiě",
        "es": "Señorita",
        "categoria": "Sustantivos"
    },
    {
        "id": 85,
        "zh": "Tàitai",
        "es": "Señora",
        "categoria": "Sustantivos"
    },
    {
        "id": 86,
        "zh": "Nǐ hǎo",
        "es": "Hola",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 87,
        "zh": "Zǎoshàng hǎo",
        "es": "Buenos días",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 88,
        "zh": "Xiàwǔ hǎo",
        "es": "Buenas tardes",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 89,
        "zh": "Wǎnshàng hǎo",
        "es": "Buenas noches",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 90,
        "zh": "Wǎn'ān",
        "es": "Buenas noches",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 91,
        "zh": "Xièxie",
        "es": "Gracias",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 92,
        "zh": "Zàijiàn",
        "es": "Adiós / Chau",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 93,
        "zh": "Bú kèqi",
        "es": "De nada",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 94,
        "zh": "Duìbuqǐ",
        "es": "Perdón",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 95,
        "zh": "Méi guānxi",
        "es": "No importa",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 96,
        "zh": "Qǐng wèn",
        "es": "Disculpe, una pregunta",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 97,
        "zh": "Huānyíng",
        "es": "Bienvenido",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 98,
        "zh": "Hǎo",
        "es": "Bien / Bueno",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 99,
        "zh": "Nǐ ne?",
        "es": "¿Y vos?",
        "categoria": "Saludos y Cortesías"
    },
    {
        "id": 100,
        "zh": "Zhēnde!",
        "es": "¡En serio!",
        "categoria": "Expresiones"
    },
    {
        "id": 101,
        "zh": "Tài guì le",
        "es": "¡Carísimo!",
        "categoria": "Expresiones"
    },
    {
        "id": 102,
        "zh": "Yīdiǎn",
        "es": "Un poco",
        "categoria": "Expresiones"
    },
    {
        "id": 103,
        "zh": "Yīdiǎndiǎn",
        "es": "Un poquito",
        "categoria": "Expresiones"
    },
    {
        "id": 104,
        "zh": "Zuì hòu",
        "es": "Último / Por último",
        "categoria": "Expresiones"
    },
    {
        "id": 105,
        "zh": "Yǒuqù",
        "es": "Interesante / Divertido",
        "categoria": "Expresiones"
    },
    {
        "id": 106,
        "zh": "Hóngsè",
        "es": "Rojo",
        "categoria": "Colores"
    },
    {
        "id": 107,
        "zh": "Lánsè",
        "es": "Azul",
        "categoria": "Colores"
    },
    {
        "id": 108,
        "zh": "Huángsè",
        "es": "Amarillo",
        "categoria": "Colores"
    },
    {
        "id": 109,
        "zh": "Lǜsè",
        "es": "Verde",
        "categoria": "Colores"
    },
    {
        "id": 110,
        "zh": "Hēisè",
        "es": "Negro",
        "categoria": "Colores"
    },
    {
        "id": 111,
        "zh": "Báisè",
        "es": "Blanco",
        "categoria": "Colores"
    },
    {
        "id": 112,
        "zh": "Chéngsè",
        "es": "Naranja",
        "categoria": "Colores"
    },
    {
        "id": 113,
        "zh": "Zǐsè",
        "es": "Púrpura / Morado",
        "categoria": "Colores"
    },
    {
        "id": 114,
        "zh": "Fěnhóngsè",
        "es": "Rosa",
        "categoria": "Colores"
    },
    {
        "id": 115,
        "zh": "Kǎfēisè",
        "es": "Marrón",
        "categoria": "Colores"
    },
    {
        "id": 116,
        "zh": "Huīsè",
        "es": "Gris",
        "categoria": "Colores"
    },
    {
        "id": 117,
        "zh": "Jīnsè",
        "es": "Dorado",
        "categoria": "Colores"
    },
    {
        "id": 118,
        "zh": "Líng",
        "es": "0",
        "categoria": "Números"
    },
    {
        "id": 119,
        "zh": "Yī",
        "es": "1",
        "categoria": "Números"
    },
    {
        "id": 120,
        "zh": "Èr",
        "es": "2",
        "categoria": "Números"
    },
    {
        "id": 121,
        "zh": "Liǎng",
        "es": "2",
        "categoria": "Números"
    },
    {
        "id": 122,
        "zh": "Sān",
        "es": "3",
        "categoria": "Números"
    },
    {
        "id": 123,
        "zh": "Sì",
        "es": "4",
        "categoria": "Números"
    },
    {
        "id": 124,
        "zh": "Wǔ",
        "es": "5",
        "categoria": "Números"
    },
    {
        "id": 125,
        "zh": "Liù",
        "es": "6",
        "categoria": "Números"
    },
    {
        "id": 126,
        "zh": "Qī",
        "es": "7",
        "categoria": "Números"
    },
    {
        "id": 127,
        "zh": "Bā",
        "es": "8",
        "categoria": "Números"
    },
    {
        "id": 128,
        "zh": "Jiǔ",
        "es": "9",
        "categoria": "Números"
    },
    {
        "id": 129,
        "zh": "Shí",
        "es": "10",
        "categoria": "Números"
    },
    {
        "id": 130,
        "zh": "Bǎi",
        "es": "Centena",
        "categoria": "Números"
    },
    {
        "id": 131,
        "zh": "Yī Bǎi",
        "es": "100",
        "categoria": "Números"
    },
    {
        "id": 132,
        "zh": "Zhōngguó",
        "es": "China",
        "categoria": "Países"
    },
    {
        "id": 133,
        "zh": "Āgēntíng",
        "es": "Argentina",
        "categoria": "Países"
    },
    {
        "id": 134,
        "zh": "Bāxī",
        "es": "Brasil",
        "categoria": "Países"
    },
    {
        "id": 135,
        "zh": "Zhìlì",
        "es": "Chile",
        "categoria": "Países"
    },
    {
        "id": 136,
        "zh": "Gēlúnbǐyà",
        "es": "Colombia",
        "categoria": "Países"
    },
    {
        "id": 137,
        "zh": "Mìlǔ",
        "es": "Perú",
        "categoria": "Países"
    },
    {
        "id": 138,
        "zh": "Wūlāguī",
        "es": "Uruguay",
        "categoria": "Países"
    },
    {
        "id": 139,
        "zh": "Bālāguī",
        "es": "Paraguay",
        "categoria": "Países"
    },
    {
        "id": 140,
        "zh": "Bōlìwéiyà",
        "es": "Bolivia",
        "categoria": "Países"
    },
    {
        "id": 141,
        "zh": "Èguāduō'ěr",
        "es": "Ecuador",
        "categoria": "Países"
    },
    {
        "id": 142,
        "zh": "Wěinèiruìlā",
        "es": "Venezuela",
        "categoria": "Países"
    },
    {
        "id": 143,
        "zh": "Éluósī",
        "es": "Rusia",
        "categoria": "Países"
    },
    {
        "id": 144,
        "zh": "Rìběn",
        "es": "Japón",
        "categoria": "Países"
    },
    {
        "id": 145,
        "zh": "Yīngguó",
        "es": "Inglaterra",
        "categoria": "Países"
    },
    {
        "id": 146,
        "zh": "Déguó",
        "es": "Alemania",
        "categoria": "Países"
    },
    {
        "id": 147,
        "zh": "Měiguó",
        "es": "EE.UU.",
        "categoria": "Países"
    },
    {
        "id": 148,
        "zh": "Fǎguó",
        "es": "Francia",
        "categoria": "Países"
    },
    {
        "id": 149,
        "zh": "Xībānyá",
        "es": "España",
        "categoria": "Países"
    },
    {
        "id": 150,
        "zh": "Yǐnliào",
        "es": "Bebida",
        "categoria": "Bebidas"
    },
    {
        "id": 151,
        "zh": "Shuǐ",
        "es": "Agua",
        "categoria": "Bebidas"
    },
    {
        "id": 152,
        "zh": "Chá",
        "es": "Té",
        "categoria": "Bebidas"
    },
    {
        "id": 153,
        "zh": "Kāfēi",
        "es": "Café",
        "categoria": "Bebidas"
    },
    {
        "id": 154,
        "zh": "Niúnǎi",
        "es": "Leche",
        "categoria": "Bebidas"
    },
    {
        "id": 155,
        "zh": "Píjiǔ",
        "es": "Cerveza",
        "categoria": "Bebidas"
    },
    {
        "id": 156,
        "zh": "Guǒzhī",
        "es": "Jugo",
        "categoria": "Bebidas"
    },
    {
        "id": 157,
        "zh": "Kělè",
        "es": "Coca-Cola / Refresco",
        "categoria": "Bebidas"
    },
    {
        "id": 158,
        "zh": "Mǎdài chá",
        "es": "Mate",
        "categoria": "Bebidas"
    },
    {
        "id": 159,
        "zh": "Chē",
        "es": "Auto / Carro",
        "categoria": "Transporte"
    },
    {
        "id": 160,
        "zh": "Huǒchē",
        "es": "Tren",
        "categoria": "Transporte"
    },
    {
        "id": 161,
        "zh": "Gōngjiāochē",
        "es": "Colectivo",
        "categoria": "Transporte"
    },
    {
        "id": 162,
        "zh": "Chūzūchē",
        "es": "Taxi",
        "categoria": "Transporte"
    },
    {
        "id": 163,
        "zh": "Bāshì",
        "es": "Bus",
        "categoria": "Transporte"
    },
    {
        "id": 164,
        "zh": "Fēijī",
        "es": "Avión",
        "categoria": "Transporte"
    },
    {
        "id": 165,
        "zh": "Dìtiě",
        "es": "Subte",
        "categoria": "Transporte"
    }
];
