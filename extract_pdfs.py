import os
import PyPDF2

def extraer_texto_de_pdfs(directorio="."):
    archivos_pdf = [f for f in os.listdir(directorio) if f.lower().endswith('.pdf')]
    
    if not archivos_pdf:
        print(f"No se encontraron archivos PDF en el directorio: {os.path.abspath(directorio)}")
        return

    print(f"Se encontraron {len(archivos_pdf)} archivos PDF. Iniciando extracción...\n")
    
    for archivo in archivos_pdf:
        ruta_completa = os.path.join(directorio, archivo)
        print(f"{'='*40}")
        print(f"📄 Leyendo archivo: {archivo}")
        print(f"{'='*40}")
        
        try:
            with open(ruta_completa, 'rb') as file:
                lector_pdf = PyPDF2.PdfReader(file)
                num_paginas = len(lector_pdf.pages)
                
                print(f"Total de páginas: {num_paginas}")
                
                for num_pag in range(num_paginas):
                    pagina = lector_pdf.pages[num_pag]
                    texto = pagina.extract_text()
                    
                    if texto.strip():
                        print(f"\n--- Página {num_pag + 1} ---")
                        # Mostrar solo los primeros 200 caracteres de cada página para no saturar la consola
                        print(texto[:200] + ("..." if len(texto) > 200 else ""))
                    else:
                        print(f"\n--- Página {num_pag + 1} (Vacía o imagen escaneada) ---")
                        
        except Exception as e:
            print(f"❌ Error al leer {archivo}: {str(e)}")
            
        print("\n")

if __name__ == "__main__":
    extraer_texto_de_pdfs()
