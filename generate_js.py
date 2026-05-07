import pandas as pd
import json
import math

xls = pd.ExcelFile("datos_completos.xlsx")
dictionary_list = []
uid = 1

def is_valid(val):
    if pd.isna(val):
        return False
    if isinstance(val, str) and val.strip() == "":
        return False
    return True

for sheet_name in xls.sheet_names:
    df = pd.read_excel(xls, sheet_name)
    
    # Manejar hoja Tonos
    if sheet_name == 'Tonos':
        for index, row in df.iterrows():
            # Par: Ejemplo Pinyin -> Español
            if 'Ejemplo Pinyin' in df.columns and 'Español' in df.columns:
                pinyin = row.get('Ejemplo Pinyin')
                esp = row.get('Español')
                if is_valid(pinyin) and is_valid(esp) and esp != '—':
                    dictionary_list.append({
                        "id": uid,
                        "zh": str(pinyin).strip(),
                        "es": str(esp).strip(),
                        "categoria": sheet_name
                    })
                    uid += 1
            
            # Par: Tono -> Descripción
            if 'Tono' in df.columns and 'Descripción' in df.columns:
                tono = row.get('Tono')
                desc = row.get('Descripción')
                if is_valid(tono) and is_valid(desc) and not str(tono).startswith('⚠️'):
                    dictionary_list.append({
                        "id": uid,
                        "zh": str(tono).strip(),
                        "es": str(desc).strip(),
                        "categoria": sheet_name
                    })
                    uid += 1
                    
    # Manejar Estructuras
    elif sheet_name == 'Estructuras':
        for index, row in df.iterrows():
            if 'Pronunciación del ejemplo' in df.columns and 'Español del ejemplo' in df.columns:
                pinyin = row.get('Pronunciación del ejemplo')
                esp = row.get('Español del ejemplo')
                if is_valid(pinyin) and is_valid(esp):
                    dictionary_list.append({
                        "id": uid,
                        "zh": str(pinyin).strip(),
                        "es": str(esp).strip(),
                        "categoria": sheet_name
                    })
                    uid += 1

    # Manejar resto de hojas estándar
    else:
        if 'Pinyin' in df.columns and 'Español' in df.columns:
            for index, row in df.iterrows():
                pinyin = row.get('Pinyin')
                esp = row.get('Español')
                if is_valid(pinyin) and is_valid(esp):
                    dictionary_list.append({
                        "id": uid,
                        "zh": str(pinyin).strip(),
                        "es": str(esp).strip(),
                        "categoria": sheet_name
                    })
                    uid += 1

# Convertir la lista a JSON
json_data = json.dumps(dictionary_list, indent=4, ensure_ascii=False)

# Escribir a data.js
js_content = f"// DICCIONARIO CENTRALIZADO EXTRAÍDO DEL EXCEL DE PACHU\n\nconst dictionaryData = {json_data};\n"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"¡Éxito! Se han extraído {len(dictionary_list)} pares del Excel y se han guardado en data.js.")
