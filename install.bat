@echo off
echo Instalando dependencias de Node.js...
call npm install

echo.
echo Instalando dependencias de Python...
echo Asegúrate de tener Python y pip instalados.
call pip install pandas openpyxl requests PyPDF2 openai-whisper

echo.
echo Creando carpeta 'uploads' si no existe...
if not exist uploads mkdir uploads

echo.
echo Generando fixed_phrases.js desde el Excel...
call python build_phrases.py

echo.
echo Instalación y configuración completadas.
echo Ahora puedes ejecutar 'run.bat' para iniciar la aplicación.
pause