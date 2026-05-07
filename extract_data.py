import pandas as pd
import requests

url = "https://docs.google.com/spreadsheets/d/1-Rz7TG0l405cjW5_Wodoct0ATe-wj_L2a_T0iCx602I/export?format=xlsx"

print("Descargando el archivo Excel...")
response = requests.get(url)
with open("datos_completos.xlsx", "wb") as f:
    f.write(response.content)

print("Analizando las hojas del Excel...")
xls = pd.ExcelFile("datos_completos.xlsx")

for sheet_name in xls.sheet_names:
    df = pd.read_excel(xls, sheet_name)
    print(f"\n--- Hoja: {sheet_name} ---")
    print(f"Columnas: {list(df.columns)}")
    print(df.head(2).to_string())
