// Diccionario fijo de 500 frases con sentido perfecto
const fixedPhrases = [
    {
        "zh": "Wǒmen yào chī miànbāo",
        "es": "Nosotros queremos comer pan",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen hē yǐnliào",
        "es": "Nosotros bebemos bebida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā yào qù Āgēntíng",
        "es": "Él quiere ir a Argentina",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ qù chāoshì",
        "es": "Vos vas a el supermercado",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Fángzi hěn xiǎo",
        "es": "La casa es muy pequeño",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Diànnǎo bù xiǎo",
        "es": "La computadora no es pequeño",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen yào qù Āgēntíng",
        "es": "Ustedes quieren ir a Argentina",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Shǒujī hěn guì",
        "es": "El celular es muy caro",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tāmen xǐhuan hē yǐnliào",
        "es": "A ellos les gusta beber bebida",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒmen yào chī miàntiáo",
        "es": "Nosotros queremos comer fideos",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen hē kāfēi",
        "es": "Ustedes beben café",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Fángzi bù dà",
        "es": "La casa no es grande",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen méiyǒu shū",
        "es": "Nosotros no tenemos un libro",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Nǐmen chī miàntiáo",
        "es": "Ustedes comen fideos",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen yǒu diànnǎo",
        "es": "Ustedes tienen una computadora",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Nǐmen hěn cōngmíng",
        "es": "Ustedes están muy inteligente",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Bēi hěn xiǎo",
        "es": "El vaso es muy pequeño",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Chē bù xīn",
        "es": "El auto no es nuevo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Bēi bù xiǎo",
        "es": "El vaso no es pequeño",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen yǒu shǒujī",
        "es": "Ustedes tienen un celular",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Chē hěn xiǎo",
        "es": "El auto es muy pequeño",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Diànnǎo bù jiù",
        "es": "La computadora no es viejo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Tāmen hē guǒzhī",
        "es": "Ellos beben jugo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen bù cōngmíng",
        "es": "Ustedes no están inteligente",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen zài Zhōngguó",
        "es": "Ustedes están en China",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒ méiyǒu fángzi",
        "es": "Yo no tengo una casa",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tāmen chī miàntiáo",
        "es": "Ellos comen fideos",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ xǐhuan hē kāfēi",
        "es": "A mí me gusta beber café",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tāmen zài Āgēntíng",
        "es": "Ellos están en Argentina",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Nǐmen qù xuéxiào",
        "es": "Ustedes van a la escuela",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐ qù yínháng",
        "es": "Vos vas a el banco",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒ yǒu shǒujī",
        "es": "Yo tengo un celular",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒmen méiyǒu chē",
        "es": "Nosotros no tenemos un auto",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Wǒ yǒu shū",
        "es": "Yo tengo un libro",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒmen yào mǎi shǒujī",
        "es": "Nosotros queremos comprar un celular",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen yào qù yínháng",
        "es": "Ustedes quieren ir a el banco",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ zài xuéxiào",
        "es": "Vos estás en la escuela",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tāmen hē shuǐ",
        "es": "Ellos beben agua",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen yào mǎi shǒujī",
        "es": "Ellos quieren comprar un celular",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Diànnǎo hěn piányi",
        "es": "La computadora es muy barato",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tāmen yào hē yǐnliào",
        "es": "Ellos quieren beber bebida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ hē píjiǔ",
        "es": "Vos bebés cerveza",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā bù gāoxìng",
        "es": "Él no está feliz",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen yào hē guǒzhī",
        "es": "Nosotros queremos beber jugo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen qù Zhōngguó",
        "es": "Ellos van a China",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tā mǎi shǒujī",
        "es": "Él compra un celular",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen xǐhuan hē píjiǔ",
        "es": "A ellos les gusta beber cerveza",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tāmen qù Āgēntíng",
        "es": "Ellos van a Argentina",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒmen yào mǎi fángzi",
        "es": "Nosotros queremos comprar una casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā hē shuǐ",
        "es": "Él bebe agua",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen bù gāoxìng",
        "es": "Ustedes no están feliz",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ yào hē yǐnliào",
        "es": "Vos querés beber bebida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen xǐhuan hē chá",
        "es": "A nosotros nos gusta beber té",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Shǒujī hěn jiù",
        "es": "El celular es muy viejo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tāmen yào mǎi chē",
        "es": "Ellos quieren comprar un auto",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen chī miànbāo",
        "es": "Nosotros comemos pan",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ yào qù xuéxiào",
        "es": "Yo quiero ir a la escuela",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā hěn lèi",
        "es": "Él está muy cansado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒ yào chī miàntiáo",
        "es": "Yo quiero comer fideos",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā hē yǐnliào",
        "es": "Él bebe bebida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen qù xuéxiào",
        "es": "Ellos van a la escuela",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Shū hěn xīn",
        "es": "El libro es muy nuevo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen yào hē chá",
        "es": "Ustedes quieren beber té",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yǒu shū",
        "es": "Vos tenés un libro",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒ mǎi fángzi",
        "es": "Yo compro una casa",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen yào qù xuéxiào",
        "es": "Ellos quieren ir a la escuela",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yào hē guǒzhī",
        "es": "Vos querés beber jugo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ yǒu bēi",
        "es": "Yo tengo un vaso",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tāmen yào chī miànbāo",
        "es": "Ellos quieren comer pan",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yào mǎi diànnǎo",
        "es": "Vos querés comprar una computadora",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yào mǎi chē",
        "es": "Vos querés comprar un auto",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ qù jiā",
        "es": "Vos vas a casa",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒmen yào qù Āgēntíng",
        "es": "Nosotros queremos ir a Argentina",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen yào mǎi fángzi",
        "es": "Ellos quieren comprar una casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yǒu shū",
        "es": "Él tiene un libro",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tāmen hē kāfēi",
        "es": "Ellos beben café",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen xǐhuan hē kāfēi",
        "es": "A nosotros nos gusta beber café",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tā zài xuéxiào",
        "es": "Él está en la escuela",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tā mǎi shū",
        "es": "Él compra un libro",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Shū hěn xiǎo",
        "es": "El libro es muy pequeño",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen méiyǒu bēi",
        "es": "Ustedes no tienen un vaso",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tāmen yào qù jiā",
        "es": "Ellos quieren ir a casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen méiyǒu fángzi",
        "es": "Ustedes no tienen una casa",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Nǐmen xǐhuan hē kāfēi",
        "es": "A ustedes les gusta beber café",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒmen yào qù xuéxiào",
        "es": "Nosotros queremos ir a la escuela",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā bù máng",
        "es": "Él no está ocupado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Tā yào chī jīròu",
        "es": "Él quiere comer pollo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Diànnǎo hěn xiǎo",
        "es": "La computadora es muy pequeño",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Zàijiàn",
        "es": "Adiós",
        "struct": "Saludo / Expresión"
    },
    {
        "zh": "Tāmen méiyǒu diànnǎo",
        "es": "Ellos no tienen una computadora",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Nǐmen yào chī fàn",
        "es": "Ustedes quieren comer comida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen mǎi chē",
        "es": "Ustedes compran un auto",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā hěn máng",
        "es": "Él está muy ocupado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen méiyǒu diànnǎo",
        "es": "Ustedes no tienen una computadora",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tāmen yào hē kāfēi",
        "es": "Ellos quieren beber café",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ xǐhuan hē guǒzhī",
        "es": "A vos te gusta beber jugo",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Chē hěn xīn",
        "es": "El auto es muy nuevo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒ mǎi shǒujī",
        "es": "Yo compro un celular",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Fángzi bù jiù",
        "es": "La casa no es viejo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Bēi hěn guì",
        "es": "El vaso es muy caro",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒ yào mǎi shǒujī",
        "es": "Yo quiero comprar un celular",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen mǎi shū",
        "es": "Ellos compran un libro",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen yǒu shū",
        "es": "Nosotros tenemos un libro",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒ yào qù Zhōngguó",
        "es": "Yo quiero ir a China",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā chī fàn",
        "es": "Él come comida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā qù Āgēntíng",
        "es": "Él va a Argentina",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒmen chī jīròu",
        "es": "Nosotros comemos pollo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ yào hē shuǐ",
        "es": "Yo quiero beber agua",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen hē chá",
        "es": "Ellos beben té",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ yào chī fàn",
        "es": "Yo quiero comer comida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen yào hē shuǐ",
        "es": "Nosotros queremos beber agua",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Shǒujī bù jiù",
        "es": "El celular no es viejo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒ hěn gāoxìng",
        "es": "Yo estoy muy feliz",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Fángzi hěn jiù",
        "es": "La casa es muy viejo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tāmen zài xuéxiào",
        "es": "Ellos están en la escuela",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tāmen chī píngguǒ",
        "es": "Ellos comen manzana",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen hē kāfēi",
        "es": "Nosotros bebemos café",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā qù xuéxiào",
        "es": "Él va a la escuela",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒ yào mǎi chē",
        "es": "Yo quiero comprar un auto",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen yǒu chē",
        "es": "Ellos tienen un auto",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Nǐmen yǒu shū",
        "es": "Ustedes tienen un libro",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒmen mǎi chē",
        "es": "Nosotros compramos un auto",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ yǒu chē",
        "es": "Yo tengo un auto",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒmen hěn máng",
        "es": "Nosotros estamos muy ocupado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā yào mǎi chē",
        "es": "Él quiere comprar un auto",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen qù jiā",
        "es": "Ustedes van a casa",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐmen zài Āgēntíng",
        "es": "Ustedes están en Argentina",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒ xǐhuan hē píjiǔ",
        "es": "A mí me gusta beber cerveza",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒ méiyǒu shū",
        "es": "Yo no tengo un libro",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tāmen hěn lèi",
        "es": "Ellos están muy cansado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒmen yǒu diànnǎo",
        "es": "Nosotros tenemos una computadora",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒ yào hē yǐnliào",
        "es": "Yo quiero beber bebida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Chē hěn jiù",
        "es": "El auto es muy viejo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒmen yào mǎi bēi",
        "es": "Nosotros queremos comprar un vaso",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen mǎi shǒujī",
        "es": "Ellos compran un celular",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ zài yínháng",
        "es": "Vos estás en el banco",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Shǒujī bù xīn",
        "es": "El celular no es nuevo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Tā yǒu fángzi",
        "es": "Él tiene una casa",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Nǐ yào chī píngguǒ",
        "es": "Vos querés comer manzana",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen yào hē guǒzhī",
        "es": "Ellos quieren beber jugo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yào hē yǐnliào",
        "es": "Él quiere beber bebida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ hǎo",
        "es": "Hola",
        "struct": "Saludo / Expresión"
    },
    {
        "zh": "Nǐ zài Āgēntíng",
        "es": "Vos estás en Argentina",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒ hěn lèi",
        "es": "Yo estoy muy cansado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Shǒujī hěn xiǎo",
        "es": "El celular es muy pequeño",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tāmen chī jīròu",
        "es": "Ellos comen pollo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen bù cōngmíng",
        "es": "Nosotros no estamos inteligente",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒ chī miànbāo",
        "es": "Yo como pan",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ zài jiā",
        "es": "Yo estoy en casa",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tāmen yào hē chá",
        "es": "Ellos quieren beber té",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ qù xuéxiào",
        "es": "Yo voy a la escuela",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tā yào qù jiā",
        "es": "Él quiere ir a casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yào chī miàntiáo",
        "es": "Él quiere comer fideos",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen yào chī miànbāo",
        "es": "Ustedes quieren comer pan",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yǒu chē",
        "es": "Él tiene un auto",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tā zài jiā",
        "es": "Él está en casa",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tā yào hē guǒzhī",
        "es": "Él quiere beber jugo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen mǎi bēi",
        "es": "Ustedes compran un vaso",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā hē kāfēi",
        "es": "Él bebe café",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ yǒu bēi",
        "es": "Vos tenés un vaso",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tāmen méiyǒu bēi",
        "es": "Ellos no tienen un vaso",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Nǐmen yào mǎi shū",
        "es": "Ustedes quieren comprar un libro",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ qù yínháng",
        "es": "Yo voy a el banco",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐmen xǐhuan hē guǒzhī",
        "es": "A ustedes les gusta beber jugo",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Nǐmen yào qù xuéxiào",
        "es": "Ustedes quieren ir a la escuela",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen méiyǒu shǒujī",
        "es": "Ellos no tienen un celular",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tāmen yǒu fángzi",
        "es": "Ellos tienen una casa",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tā mǎi diànnǎo",
        "es": "Él compra una computadora",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā yào mǎi bēi",
        "es": "Él quiere comprar un vaso",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen hěn cōngmíng",
        "es": "Ellos están muy inteligente",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Diànnǎo hěn dà",
        "es": "La computadora es muy grande",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒ xǐhuan hē chá",
        "es": "A mí me gusta beber té",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒ chī fàn",
        "es": "Yo como comida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ yào qù yínháng",
        "es": "Yo quiero ir a el banco",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen hěn lèi",
        "es": "Nosotros estamos muy cansado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā chī miàntiáo",
        "es": "Él come fideos",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Diànnǎo hěn xīn",
        "es": "La computadora es muy nuevo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒ zài chāoshì",
        "es": "Yo estoy en el supermercado",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Nǐ mǎi bēi",
        "es": "Vos comprás un vaso",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Shū bù xīn",
        "es": "El libro no es nuevo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ hěn gāoxìng",
        "es": "Vos estás muy feliz",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen yǒu chē",
        "es": "Ustedes tienen un auto",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Nǐ méiyǒu chē",
        "es": "Vos no tenés un auto",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Wǒmen yào qù jiā",
        "es": "Nosotros queremos ir a casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ qù Āgēntíng",
        "es": "Yo voy a Argentina",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐ chī píngguǒ",
        "es": "Vos comés manzana",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā yào hē píjiǔ",
        "es": "Él quiere beber cerveza",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yào qù yínháng",
        "es": "Él quiere ir a el banco",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen yào chī miàntiáo",
        "es": "Ustedes quieren comer fideos",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen yào hē shuǐ",
        "es": "Ellos quieren beber agua",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yào qù xuéxiào",
        "es": "Él quiere ir a la escuela",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ qù Zhōngguó",
        "es": "Yo voy a China",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tā méiyǒu bēi",
        "es": "Él no tiene un vaso",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Wǒ yào mǎi diànnǎo",
        "es": "Yo quiero comprar una computadora",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen chī fàn",
        "es": "Ellos comen comida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Shū hěn jiù",
        "es": "El libro es muy viejo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen mǎi diànnǎo",
        "es": "Ustedes compran una computadora",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen yǒu diànnǎo",
        "es": "Ellos tienen una computadora",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Nǐmen méiyǒu shū",
        "es": "Ustedes no tienen un libro",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tāmen xǐhuan hē shuǐ",
        "es": "A ellos les gusta beber agua",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒmen bù lèi",
        "es": "Nosotros no estamos cansado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen yào chī fàn",
        "es": "Nosotros queremos comer comida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yào hē shuǐ",
        "es": "Él quiere beber agua",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ zài Āgēntíng",
        "es": "Yo estoy en Argentina",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒ mǎi diànnǎo",
        "es": "Yo compro una computadora",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Fángzi bù guì",
        "es": "La casa no es caro",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒ xǐhuan hē guǒzhī",
        "es": "A mí me gusta beber jugo",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Nǐmen yào qù chāoshì",
        "es": "Ustedes quieren ir a el supermercado",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ chī miàntiáo",
        "es": "Yo como fideos",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen chī fàn",
        "es": "Ustedes comen comida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā zài yínháng",
        "es": "Él está en el banco",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Shǒujī bù piányi",
        "es": "El celular no es barato",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ mǎi chē",
        "es": "Vos comprás un auto",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ méiyǒu shǒujī",
        "es": "Yo no tengo un celular",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tā yǒu bēi",
        "es": "Él tiene un vaso",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tāmen hē píjiǔ",
        "es": "Ellos beben cerveza",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ hē yǐnliào",
        "es": "Yo bebo bebida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen bù lèi",
        "es": "Ellos no están cansado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Diànnǎo hěn guì",
        "es": "La computadora es muy caro",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Fángzi hěn piányi",
        "es": "La casa es muy barato",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen zài jiā",
        "es": "Ustedes están en casa",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tā méiyǒu shǒujī",
        "es": "Él no tiene un celular",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Nǐ yào qù Zhōngguó",
        "es": "Vos querés ir a China",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen yǒu fángzi",
        "es": "Nosotros tenemos una casa",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒ xǐhuan hē yǐnliào",
        "es": "A mí me gusta beber bebida",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tā yào mǎi shū",
        "es": "Él quiere comprar un libro",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yào chī fàn",
        "es": "Él quiere comer comida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā mǎi chē",
        "es": "Él compra un auto",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ xǐhuan hē píjiǔ",
        "es": "A vos te gusta beber cerveza",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Nǐmen zài yínháng",
        "es": "Ustedes están en el banco",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒ qù chāoshì",
        "es": "Yo voy a el supermercado",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒ yào mǎi fángzi",
        "es": "Yo quiero comprar una casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen zài jiā",
        "es": "Ellos están en casa",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒ bù lèi",
        "es": "Yo no estoy cansado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ zài Zhōngguó",
        "es": "Vos estás en China",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒ zài xuéxiào",
        "es": "Yo estoy en la escuela",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tā méiyǒu fángzi",
        "es": "Él no tiene una casa",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Wǒmen mǎi shū",
        "es": "Nosotros compramos un libro",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen mǎi fángzi",
        "es": "Nosotros compramos una casa",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen qù Zhōngguó",
        "es": "Ustedes van a China",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐ yào qù yínháng",
        "es": "Vos querés ir a el banco",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen qù chāoshì",
        "es": "Nosotros vamos a el supermercado",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐ bù cōngmíng",
        "es": "Vos no estás inteligente",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen yǒu bēi",
        "es": "Ustedes tienen un vaso",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Shū bù piányi",
        "es": "El libro no es barato",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Diànnǎo bù dà",
        "es": "La computadora no es grande",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ xǐhuan hē yǐnliào",
        "es": "A vos te gusta beber bebida",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒ hē guǒzhī",
        "es": "Yo bebo jugo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen bù máng",
        "es": "Ellos no están ocupado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Tāmen bù cōngmíng",
        "es": "Ellos no están inteligente",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Tā yào qù chāoshì",
        "es": "Él quiere ir a el supermercado",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Fángzi bù piányi",
        "es": "La casa no es barato",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Shǒujī bù dà",
        "es": "El celular no es grande",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ bù gāoxìng",
        "es": "Vos no estás feliz",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen yào mǎi bēi",
        "es": "Ustedes quieren comprar un vaso",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen yào hē chá",
        "es": "Nosotros queremos beber té",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā hěn gāoxìng",
        "es": "Él está muy feliz",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐ yào chī fàn",
        "es": "Vos querés comer comida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ yào hē kāfēi",
        "es": "Yo quiero beber café",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǎnshàng hǎo",
        "es": "Buenas noches",
        "struct": "Saludo / Expresión"
    },
    {
        "zh": "Wǒ bù máng",
        "es": "Yo no estoy ocupado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen zài Āgēntíng",
        "es": "Nosotros estamos en Argentina",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Nǐ yào hē píjiǔ",
        "es": "Vos querés beber cerveza",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ méiyǒu shǒujī",
        "es": "Vos no tenés un celular",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tā yào mǎi shǒujī",
        "es": "Él quiere comprar un celular",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen yǒu bēi",
        "es": "Nosotros tenemos un vaso",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒmen hē píjiǔ",
        "es": "Nosotros bebemos cerveza",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā yǒu diànnǎo",
        "es": "Él tiene una computadora",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒ mǎi bēi",
        "es": "Yo compro un vaso",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen zài jiā",
        "es": "Nosotros estamos en casa",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Nǐ hěn lèi",
        "es": "Vos estás muy cansado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒmen yào mǎi diànnǎo",
        "es": "Nosotros queremos comprar una computadora",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen hē guǒzhī",
        "es": "Ustedes beben jugo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ yào chī miànbāo",
        "es": "Vos querés comer pan",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen hěn gāoxìng",
        "es": "Ustedes están muy feliz",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā yào qù Zhōngguó",
        "es": "Él quiere ir a China",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ hē shuǐ",
        "es": "Vos bebés agua",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ chī jīròu",
        "es": "Vos comés pollo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen méiyǒu fángzi",
        "es": "Ellos no tienen una casa",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Bēi hěn dà",
        "es": "El vaso es muy grande",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā qù jiā",
        "es": "Él va a casa",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Chē hěn piányi",
        "es": "El auto es muy barato",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā mǎi bēi",
        "es": "Él compra un vaso",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen mǎi fángzi",
        "es": "Ellos compran una casa",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ yào chī miàntiáo",
        "es": "Vos querés comer fideos",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ chī miàntiáo",
        "es": "Vos comés fideos",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen yào hē yǐnliào",
        "es": "Nosotros queremos beber bebida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā zài Āgēntíng",
        "es": "Él está en Argentina",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Shǒujī hěn dà",
        "es": "El celular es muy grande",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen hē yǐnliào",
        "es": "Ustedes beben bebida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen yào qù Zhōngguó",
        "es": "Ustedes quieren ir a China",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā xǐhuan hē píjiǔ",
        "es": "A él le gusta beber cerveza",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Chē hěn guì",
        "es": "El auto es muy caro",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒmen yào chī píngguǒ",
        "es": "Nosotros queremos comer manzana",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Shǒujī bù guì",
        "es": "El celular no es caro",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen méiyǒu shǒujī",
        "es": "Nosotros no tenemos un celular",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Nǐmen hē píjiǔ",
        "es": "Ustedes beben cerveza",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen yào qù Āgēntíng",
        "es": "Ellos quieren ir a Argentina",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen hěn gāoxìng",
        "es": "Nosotros estamos muy feliz",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒ zài Zhōngguó",
        "es": "Yo estoy en China",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Nǐ yǒu diànnǎo",
        "es": "Vos tenés una computadora",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Nǐ hē kāfēi",
        "es": "Vos bebés café",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen hěn máng",
        "es": "Ustedes están muy ocupado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Tāmen mǎi diànnǎo",
        "es": "Ellos compran una computadora",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen méiyǒu shū",
        "es": "Ellos no tienen un libro",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Wǒ hē shuǐ",
        "es": "Yo bebo agua",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ mǎi shū",
        "es": "Yo compro un libro",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen mǎi diànnǎo",
        "es": "Nosotros compramos una computadora",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ mǎi diànnǎo",
        "es": "Vos comprás una computadora",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Bēi bù guì",
        "es": "El vaso no es caro",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen bù máng",
        "es": "Nosotros no estamos ocupado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒ yào hē píjiǔ",
        "es": "Yo quiero beber cerveza",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ yào qù Āgēntíng",
        "es": "Yo quiero ir a Argentina",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Bēi hěn xīn",
        "es": "El vaso es muy nuevo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen hē shuǐ",
        "es": "Ustedes beben agua",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ méiyǒu bēi",
        "es": "Yo no tengo un vaso",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tā xǐhuan hē shuǐ",
        "es": "A él le gusta beber agua",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒmen qù xuéxiào",
        "es": "Nosotros vamos a la escuela",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tāmen qù jiā",
        "es": "Ellos van a casa",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒmen yào qù Zhōngguó",
        "es": "Nosotros queremos ir a China",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Shū bù xiǎo",
        "es": "El libro no es pequeño",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒ yǒu fángzi",
        "es": "Yo tengo una casa",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tāmen mǎi chē",
        "es": "Ellos compran un auto",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen chī fàn",
        "es": "Nosotros comemos comida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Shū bù dà",
        "es": "El libro no es grande",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ mǎi shǒujī",
        "es": "Vos comprás un celular",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Bēi hěn jiù",
        "es": "El vaso es muy viejo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen hěn lèi",
        "es": "Ustedes están muy cansado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Bēi bù piányi",
        "es": "El vaso no es barato",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒ yào mǎi bēi",
        "es": "Yo quiero comprar un vaso",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen hē chá",
        "es": "Nosotros bebemos té",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Xiàwǔ hǎo",
        "es": "Buenas tardes",
        "struct": "Saludo / Expresión"
    },
    {
        "zh": "Nǐmen qù Āgēntíng",
        "es": "Ustedes van a Argentina",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tā hē píjiǔ",
        "es": "Él bebe cerveza",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā xǐhuan hē kāfēi",
        "es": "A él le gusta beber café",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tāmen yào qù yínháng",
        "es": "Ellos quieren ir a el banco",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen méiyǒu diànnǎo",
        "es": "Nosotros no tenemos una computadora",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Nǐmen yào qù jiā",
        "es": "Ustedes quieren ir a casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ hē guǒzhī",
        "es": "Vos bebés jugo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen yào mǎi shū",
        "es": "Nosotros queremos comprar un libro",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen yào mǎi shū",
        "es": "Ellos quieren comprar un libro",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen xǐhuan hē píjiǔ",
        "es": "A ustedes les gusta beber cerveza",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Nǐ yào hē chá",
        "es": "Vos querés beber té",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen yào hē píjiǔ",
        "es": "Ustedes quieren beber cerveza",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen xǐhuan hē guǒzhī",
        "es": "A ellos les gusta beber jugo",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒ yào mǎi shū",
        "es": "Yo quiero comprar un libro",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Diànnǎo bù piányi",
        "es": "La computadora no es barato",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒ hē píjiǔ",
        "es": "Yo bebo cerveza",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Zǎoshang hǎo",
        "es": "Buenos días",
        "struct": "Saludo / Expresión"
    },
    {
        "zh": "Tāmen yào chī píngguǒ",
        "es": "Ellos quieren comer manzana",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen hěn cōngmíng",
        "es": "Nosotros estamos muy inteligente",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒ hē chá",
        "es": "Yo bebo té",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen zài yínháng",
        "es": "Ellos están en el banco",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒ hěn máng",
        "es": "Yo estoy muy ocupado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā chī miànbāo",
        "es": "Él come pan",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ yào qù Āgēntíng",
        "es": "Vos querés ir a Argentina",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ mǎi chē",
        "es": "Yo compro un auto",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen xǐhuan hē guǒzhī",
        "es": "A nosotros nos gusta beber jugo",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tā mǎi fángzi",
        "es": "Él compra una casa",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Fángzi hěn dà",
        "es": "La casa es muy grande",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā yǒu shǒujī",
        "es": "Él tiene un celular",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tāmen hē yǐnliào",
        "es": "Ellos beben bebida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen hěn gāoxìng",
        "es": "Ellos están muy feliz",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐ chī miànbāo",
        "es": "Vos comés pan",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen zài Zhōngguó",
        "es": "Ellos están en China",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒmen yào hē kāfēi",
        "es": "Nosotros queremos beber café",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen zài chāoshì",
        "es": "Ustedes están en el supermercado",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Nǐmen mǎi fángzi",
        "es": "Ustedes compran una casa",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Fángzi hěn xīn",
        "es": "La casa es muy nuevo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐ yào mǎi fángzi",
        "es": "Vos querés comprar una casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ yào hē chá",
        "es": "Yo quiero beber té",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen yào mǎi shǒujī",
        "es": "Ustedes quieren comprar un celular",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā chī píngguǒ",
        "es": "Él come manzana",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen qù Zhōngguó",
        "es": "Nosotros vamos a China",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐmen yào mǎi chē",
        "es": "Ustedes quieren comprar un auto",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā yào hē chá",
        "es": "Él quiere beber té",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ qù jiā",
        "es": "Yo voy a casa",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Chē hěn dà",
        "es": "El auto es muy grande",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā yào mǎi diànnǎo",
        "es": "Él quiere comprar una computadora",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen mǎi shū",
        "es": "Ustedes compran un libro",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā méiyǒu diànnǎo",
        "es": "Él no tiene una computadora",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tā xǐhuan hē chá",
        "es": "A él le gusta beber té",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Fángzi bù xīn",
        "es": "La casa no es nuevo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen méiyǒu fángzi",
        "es": "Nosotros no tenemos una casa",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Wǒ xǐhuan hē shuǐ",
        "es": "A mí me gusta beber agua",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒ bù cōngmíng",
        "es": "Yo no estoy inteligente",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen yào hē guǒzhī",
        "es": "Ustedes quieren beber jugo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen qù yínháng",
        "es": "Ellos van a el banco",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒmen yào qù chāoshì",
        "es": "Nosotros queremos ir a el supermercado",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen mǎi bēi",
        "es": "Nosotros compramos un vaso",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ qù xuéxiào",
        "es": "Vos vas a la escuela",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐ yào qù xuéxiào",
        "es": "Vos querés ir a la escuela",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen yào mǎi diànnǎo",
        "es": "Ellos quieren comprar una computadora",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen bù gāoxìng",
        "es": "Nosotros no estamos feliz",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Tā qù yínháng",
        "es": "Él va a el banco",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tāmen yǒu shǒujī",
        "es": "Ellos tienen un celular",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tā yào chī píngguǒ",
        "es": "Él quiere comer manzana",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen méiyǒu chē",
        "es": "Ustedes no tienen un auto",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tā chī jīròu",
        "es": "Él come pollo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tā hē chá",
        "es": "Él bebe té",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ chī píngguǒ",
        "es": "Yo como manzana",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Bēi hěn piányi",
        "es": "El vaso es muy barato",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐ chī fàn",
        "es": "Vos comés comida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen qù yínháng",
        "es": "Ustedes van a el banco",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tāmen yào qù Zhōngguó",
        "es": "Ellos quieren ir a China",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā xǐhuan hē yǐnliào",
        "es": "A él le gusta beber bebida",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tā méiyǒu chē",
        "es": "Él no tiene un auto",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Wǒmen méiyǒu bēi",
        "es": "Nosotros no tenemos un vaso",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tā qù Zhōngguó",
        "es": "Él va a China",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tā hěn cōngmíng",
        "es": "Él está muy inteligente",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Tā qù chāoshì",
        "es": "Él va a el supermercado",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tā bù cōngmíng",
        "es": "Él no está inteligente",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Diànnǎo hěn jiù",
        "es": "La computadora es muy viejo",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen chī jīròu",
        "es": "Ustedes comen pollo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Tāmen yào qù chāoshì",
        "es": "Ellos quieren ir a el supermercado",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ bù lèi",
        "es": "Vos no estás cansado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Diànnǎo bù xīn",
        "es": "La computadora no es nuevo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen xǐhuan hē yǐnliào",
        "es": "A ustedes les gusta beber bebida",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tā hē guǒzhī",
        "es": "Él bebe jugo",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen yào mǎi fángzi",
        "es": "Ustedes quieren comprar una casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā xǐhuan hē guǒzhī",
        "es": "A él le gusta beber jugo",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Wǒmen qù yínháng",
        "es": "Nosotros vamos a el banco",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Chē bù dà",
        "es": "El auto no es grande",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ zài chāoshì",
        "es": "Vos estás en el supermercado",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Nǐmen qù chāoshì",
        "es": "Ustedes van a el supermercado",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Chē bù jiù",
        "es": "El auto no es viejo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ mǎi shū",
        "es": "Vos comprás un libro",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ mǎi fángzi",
        "es": "Vos comprás una casa",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐmen yào mǎi diànnǎo",
        "es": "Ustedes quieren comprar una computadora",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ hěn cōngmíng",
        "es": "Vos estás muy inteligente",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒmen chī píngguǒ",
        "es": "Nosotros comemos manzana",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ xǐhuan hē shuǐ",
        "es": "A vos te gusta beber agua",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Nǐmen yào chī píngguǒ",
        "es": "Ustedes quieren comer manzana",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tā zài Zhōngguó",
        "es": "Él está en China",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tāmen yào chī miàntiáo",
        "es": "Ellos quieren comer fideos",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ yǒu diànnǎo",
        "es": "Yo tengo una computadora",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Wǒ yào hē guǒzhī",
        "es": "Yo quiero beber jugo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yǒu chē",
        "es": "Vos tenés un auto",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Nǐmen xǐhuan hē shuǐ",
        "es": "A ustedes les gusta beber agua",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Nǐ hē chá",
        "es": "Vos bebés té",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒ méiyǒu chē",
        "es": "Yo no tengo un auto",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Bēi bù xīn",
        "es": "El vaso no es nuevo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ yào mǎi shū",
        "es": "Vos querés comprar un libro",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Tāmen chī miànbāo",
        "es": "Ellos comen pan",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Shū hěn piányi",
        "es": "El libro es muy barato",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐmen hē chá",
        "es": "Ustedes beben té",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ bù máng",
        "es": "Vos no estás ocupado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Shū hěn dà",
        "es": "El libro es muy grande",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Chē bù piányi",
        "es": "El auto no es barato",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen chī miànbāo",
        "es": "Ustedes comen pan",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen mǎi shǒujī",
        "es": "Nosotros compramos un celular",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen yào qù yínháng",
        "es": "Nosotros queremos ir a el banco",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒmen yǒu chē",
        "es": "Nosotros tenemos un auto",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Nǐmen yào hē yǐnliào",
        "es": "Ustedes quieren beber bebida",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen yǒu fángzi",
        "es": "Ustedes tienen una casa",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tāmen qù chāoshì",
        "es": "Ellos van a el supermercado",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Wǒmen hē shuǐ",
        "es": "Nosotros bebemos agua",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Wǒmen yào mǎi chē",
        "es": "Nosotros queremos comprar un auto",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen bù lèi",
        "es": "Ustedes no están cansado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ xǐhuan hē kāfēi",
        "es": "A vos te gusta beber café",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Chē bù xiǎo",
        "es": "El auto no es pequeño",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Shū bù guì",
        "es": "El libro no es caro",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Shū bù jiù",
        "es": "El libro no es viejo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen chī píngguǒ",
        "es": "Ustedes comen manzana",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Shǒujī bù xiǎo",
        "es": "El celular no es pequeño",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen yào chī jīròu",
        "es": "Nosotros queremos comer pollo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ zài yínháng",
        "es": "Yo estoy en el banco",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Nǐ qù Āgēntíng",
        "es": "Vos vas a Argentina",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Tā yào chī miànbāo",
        "es": "Él quiere comer pan",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ qù Zhōngguó",
        "es": "Vos vas a China",
        "struct": "Sujeto + Verbo + Lugar"
    },
    {
        "zh": "Nǐ yào mǎi shǒujī",
        "es": "Vos querés comprar un celular",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Chē bù guì",
        "es": "El auto no es caro",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒmen zài xuéxiào",
        "es": "Nosotros estamos en la escuela",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Tāmen yào mǎi bēi",
        "es": "Ellos quieren comprar un vaso",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yào qù jiā",
        "es": "Vos querés ir a casa",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yào chī jīròu",
        "es": "Vos querés comer pollo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yào mǎi bēi",
        "es": "Vos querés comprar un vaso",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐmen yào hē kāfēi",
        "es": "Ustedes quieren beber café",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ méiyǒu diànnǎo",
        "es": "Vos no tenés una computadora",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Nǐmen méiyǒu shǒujī",
        "es": "Ustedes no tienen un celular",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tāmen xǐhuan hē kāfēi",
        "es": "A ellos les gusta beber café",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Bēi bù jiù",
        "es": "El vaso no es viejo",
        "struct": "Objeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐmen yào hē shuǐ",
        "es": "Ustedes quieren beber agua",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Shǒujī hěn piányi",
        "es": "El celular es muy barato",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒ yào chī jīròu",
        "es": "Yo quiero comer pollo",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ yào hē kāfēi",
        "es": "Vos querés beber café",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Fángzi hěn guì",
        "es": "La casa es muy caro",
        "struct": "Objeto + hěn + Adjetivo"
    },
    {
        "zh": "Wǒmen xǐhuan hē yǐnliào",
        "es": "A nosotros nos gusta beber bebida",
        "struct": "Sujeto + Gustar + Acción"
    },
    {
        "zh": "Tā bù lèi",
        "es": "Él no está cansado",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Wǒ yào qù chāoshì",
        "es": "Yo quiero ir a el supermercado",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Nǐ méiyǒu bēi",
        "es": "Vos no tenés un vaso",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tā méiyǒu shū",
        "es": "Él no tiene un libro",
        "struct": "Sujeto + méiyǒu + Objeto"
    },
    {
        "zh": "Tāmen hěn máng",
        "es": "Ellos están muy ocupado",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Tāmen bù gāoxìng",
        "es": "Ellos no están feliz",
        "struct": "Sujeto + bù + Adjetivo"
    },
    {
        "zh": "Nǐ yǒu shǒujī",
        "es": "Vos tenés un celular",
        "struct": "Sujeto + yǒu + Objeto"
    },
    {
        "zh": "Tāmen yào hē píjiǔ",
        "es": "Ellos quieren beber cerveza",
        "struct": "Sujeto + Querer + Acción"
    },
    {
        "zh": "Wǒ hěn cōngmíng",
        "es": "Yo estoy muy inteligente",
        "struct": "Sujeto + hěn + Adjetivo"
    },
    {
        "zh": "Nǐ hē yǐnliào",
        "es": "Vos bebés bebida",
        "struct": "Sujeto + Verbo + Objeto"
    },
    {
        "zh": "Nǐ zài jiā",
        "es": "Vos estás en casa",
        "struct": "Sujeto + zài + Lugar"
    },
    {
        "zh": "Wǒmen yǒu shǒujī",
        "es": "Nosotros tenemos un celular",
        "struct": "Sujeto + yǒu + Objeto"
    }
];
