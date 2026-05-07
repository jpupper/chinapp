import json
import random

phrases = []

# Sujetos y sus conjugaciones
# (Pinyin, Español, beber, estar, ir, querer, tener, comprar, gustar, mirar/ver)
sujetos = [
    ("Wǒ", "Yo", "bebo", "estoy", "voy", "quiero", "tengo", "compro", "gusta", "veo"),
    ("Nǐ", "Vos", "bebés", "estás", "vas", "querés", "tenés", "comprás", "gusta", "ves"),
    ("Tā", "Él", "bebe", "está", "va", "quiere", "tiene", "compra", "gusta", "ve"),
    ("Wǒmen", "Nosotros", "bebemos", "estamos", "vamos", "queremos", "tenemos", "compramos", "gusta", "vemos"),
    ("Nǐmen", "Ustedes", "beben", "están", "van", "quieren", "tienen", "compran", "gusta", "ven"),
    ("Tāmen", "Ellos", "beben", "están", "van", "quieren", "tienen", "compran", "gusta", "ven")
]

bebidas = [("chá", "té"), ("shuǐ", "agua"), ("kāfēi", "café"), ("píjiǔ", "cerveza"), ("yǐnliào", "bebida"), ("guǒzhī", "jugo")]
comidas = [("fàn", "comida"), ("miàntiáo", "fideos"), ("jīròu", "pollo"), ("píngguǒ", "manzana"), ("miànbāo", "pan")]
lugares = [("Zhōngguó", "China"), ("Āgēntíng", "Argentina"), ("jiā", "casa"), ("xuéxiào", "la escuela"), ("yínháng", "el banco"), ("chāoshì", "el supermercado")]
cosas = [("chē", "el auto"), ("shǒujī", "el celular"), ("shū", "el libro"), ("fángzi", "la casa"), ("diànnǎo", "la computadora"), ("bēi", "el vaso")]
adj_pers = [("máng", "ocupado"), ("lèi", "cansado"), ("gāoxìng", "feliz"), ("cōngmíng", "inteligente")]
adj_cosas = [("guì", "caro"), ("piányi", "barato"), ("dà", "grande"), ("xiǎo", "pequeño"), ("xīn", "nuevo"), ("jiù", "viejo")]
saludos = [("Nǐ hǎo", "Hola"), ("Zǎoshang hǎo", "Buenos días"), ("Xiàwǔ hǎo", "Buenas tardes"), ("Wǎnshàng hǎo", "Buenas noches"), ("Zàijiàn", "Adiós")]

# 1. Beber y Comer
for s in sujetos:
    zh_s, es_s, v_beb, v_est, v_ir, v_que, v_ten, v_com, v_gus, v_ver = s
    for b in bebidas:
        phrases.append({"zh": f"{zh_s} hē {b[0]}", "es": f"{es_s} {v_beb} {b[1]}", "struct": "Sujeto + Verbo + Objeto"})
        phrases.append({"zh": f"{zh_s} yào hē {b[0]}", "es": f"{es_s} {v_que} beber {b[1]}", "struct": "Sujeto + Querer + Acción"})
        phrases.append({"zh": f"{zh_s} xǐhuan hē {b[0]}", "es": f"A {es_s.lower() if es_s != 'Yo' else 'mí'} me {v_gus} beber {b[1]}".replace('A vos me', 'A vos te').replace('A él me', 'A él le').replace('A nosotros me', 'A nosotros nos').replace('A ustedes me', 'A ustedes les').replace('A ellos me', 'A ellos les'), "struct": "Sujeto + Gustar + Acción"})

    for c in comidas:
        v_comer = "como" if es_s=="Yo" else "comés" if es_s=="Vos" else "come" if es_s=="Él" else "comemos" if es_s=="Nosotros" else "comen"
        phrases.append({"zh": f"{zh_s} chī {c[0]}", "es": f"{es_s} {v_comer} {c[1]}", "struct": "Sujeto + Verbo + Objeto"})
        phrases.append({"zh": f"{zh_s} yào chī {c[0]}", "es": f"{es_s} {v_que} comer {c[1]}", "struct": "Sujeto + Querer + Acción"})

# 2. Ir y Estar en lugares
for s in sujetos:
    zh_s, es_s, v_beb, v_est, v_ir, v_que, v_ten, v_com, v_gus, v_ver = s
    for l in lugares:
        phrases.append({"zh": f"{zh_s} qù {l[0]}", "es": f"{es_s} {v_ir} a {l[1]}", "struct": "Sujeto + Verbo + Lugar"})
        phrases.append({"zh": f"{zh_s} zài {l[0]}", "es": f"{es_s} {v_est} en {l[1]}", "struct": "Sujeto + zài + Lugar"})
        phrases.append({"zh": f"{zh_s} yào qù {l[0]}", "es": f"{es_s} {v_que} ir a {l[1]}", "struct": "Sujeto + Querer + Acción"})

# 3. Adjetivos para Personas
for s in sujetos:
    zh_s, es_s, v_beb, v_est, v_ir, v_que, v_ten, v_com, v_gus, v_ver = s
    for a in adj_pers:
        phrases.append({"zh": f"{zh_s} hěn {a[0]}", "es": f"{es_s} {v_est} muy {a[1]}", "struct": "Sujeto + hěn + Adjetivo"})
        phrases.append({"zh": f"{zh_s} bù {a[0]}", "es": f"{es_s} no {v_est} {a[1]}", "struct": "Sujeto + bù + Adjetivo"})

# 4. Adjetivos para Cosas
for c in cosas:
    for a in adj_cosas:
        phrases.append({"zh": f"{c[0].capitalize()} hěn {a[0]}", "es": f"{c[1].capitalize()} es muy {a[1]}", "struct": "Objeto + hěn + Adjetivo"})
        phrases.append({"zh": f"{c[0].capitalize()} bù {a[0]}", "es": f"{c[1].capitalize()} no es {a[1]}", "struct": "Objeto + bù + Adjetivo"})

# 5. Tener y Comprar
for s in sujetos:
    zh_s, es_s, v_beb, v_est, v_ir, v_que, v_ten, v_com, v_gus, v_ver = s
    for c in cosas:
        articulo_un = "una" if c[1].startswith("la ") else "un"
        objeto_limpio = c[1].replace("el ", "").replace("la ", "")
        
        phrases.append({"zh": f"{zh_s} yǒu {c[0]}", "es": f"{es_s} {v_ten} {articulo_un} {objeto_limpio}", "struct": "Sujeto + yǒu + Objeto"})
        phrases.append({"zh": f"{zh_s} méiyǒu {c[0]}", "es": f"{es_s} no {v_ten} {articulo_un} {objeto_limpio}", "struct": "Sujeto + méiyǒu + Objeto"})
        phrases.append({"zh": f"{zh_s} mǎi {c[0]}", "es": f"{es_s} {v_com} {articulo_un} {objeto_limpio}", "struct": "Sujeto + Verbo + Objeto"})
        phrases.append({"zh": f"{zh_s} yào mǎi {c[0]}", "es": f"{es_s} {v_que} comprar {articulo_un} {objeto_limpio}", "struct": "Sujeto + Querer + Acción"})

# 6. Saludos Básicos
for sal in saludos:
    phrases.append({"zh": sal[0], "es": sal[1], "struct": "Saludo / Expresión"})

# Mezclar y tomar exactamente 500
random.seed(42)
random.shuffle(phrases)
final_phrases = phrases[:500]

js_output = f"// Diccionario fijo de 500 frases con sentido perfecto\nconst fixedPhrases = {json.dumps(final_phrases, indent=4, ensure_ascii=False)};\n"

with open("fixed_phrases.js", "w", encoding="utf-8") as f:
    f.write(js_output)

print(f"✅ Generadas {len(final_phrases)} frases perfectas y guardadas en fixed_phrases.js")
