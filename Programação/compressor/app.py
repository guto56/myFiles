from flask import Flask, request, send_file
import os
import subprocess

app = Flask(__name__)

# Caminho para o diretório onde os PDFs serão salvos
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Configuração do Flask para lidar com o upload de arquivos
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return open("index.html").read()  # Serve o HTML de upload

@app.route('/compress', methods=['POST'])
def compress_pdf():
    # Verifica se o arquivo foi enviado
    if 'file' not in request.files:
        return "Nenhum arquivo enviado", 400

    file = request.files['file']
    
    if file.filename == '':
        return "Nenhum arquivo selecionado", 400

    # Salva o arquivo PDF enviado
    input_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(input_path)

    # Caminho do arquivo comprimido
    output_path = os.path.join(app.config['UPLOAD_FOLDER'], 'compressed_' + file.filename)

    # Comprimir o PDF usando o Ghostscript
    try:
        command = [
            'gs', '-sDEVICE=pdfwrite', '-dCompatibilityLevel=1.4', 
            '-dPDFSETTINGS=/ebook', '-dNOPAUSE', '-dQUIET', 
            '-dBATCH', f'-sOutputFile={output_path}', input_path
        ]
        subprocess.run(command, check=True)  # Executa o comando Ghostscript

        # Envia o arquivo comprimido de volta ao usuário
        return send_file(output_path, as_attachment=True)

    except subprocess.CalledProcessError as e:
        return f"Erro ao comprimir o PDF: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)
