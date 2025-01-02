import os
from flask import Flask, request, send_file, render_template_string
import PyPDF2
from pdfrw import PdfReader, PdfWriter

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'  # Pasta para armazenar arquivos enviados
app.config['COMPRESSED_FOLDER'] = 'compressed'  # Pasta para armazenar arquivos comprimidos
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs(app.config['COMPRESSED_FOLDER'], exist_ok=True)

# Função para comprimir o PDF usando PyPDF2
def comprimir_pdf(input_pdf_path, output_pdf_path):
    with open(input_pdf_path, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        writer = PyPDF2.PdfWriter()

        # Adiciona cada página do PDF ao writer
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num]
            writer.add_page(page)

        # Salva o arquivo comprimido
        with open(output_pdf_path, "wb") as out:
            writer.write(out)

# Função para usar pdfrw e reduzir o tamanho
def pdfrw_compress(input_pdf_path, output_pdf_path):
    reader = PdfReader(input_pdf_path)
    writer = PdfWriter()

    # Adiciona páginas e otimiza o arquivo
    writer.addpages(reader.pages)
    writer.write(output_pdf_path)

@app.route('/')
def index():
    return render_template_string("""
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Compressor de PDF</title>
        <style>
            body{
             font-family: Arial;
            }
        </style>
    </head>
    <body>
        <h1>Compressor de PDF</h1>
        <form method="POST" enctype="multipart/form-data" action="/compress">
            <label for="file">Selecione um arquivo PDF para comprimir:</label><br><br>
            <input type="file" name="file" accept="application/pdf" required><br><br>
            <input type="submit" value="Comprimir PDF">
        </form>
    </body>
    </html>
    """)

@app.route('/compress', methods=['POST'])
def compress_pdf():
    if 'file' not in request.files:
        return "Nenhum arquivo enviado", 400

    file = request.files['file']
    
    if file.filename == '':
        return "Nenhum arquivo selecionado", 400

    # Caminho para salvar o arquivo enviado
    input_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(input_path)

    # Caminho para o arquivo comprimido
    output_path = os.path.join(app.config['COMPRESSED_FOLDER'], f'compressed_{file.filename}')

    try:
        # Comprime o PDF (usando a função com PyPDF2)
        comprimir_pdf(input_path, output_path)
        # pdfrw_compress(input_path, output_path)  # Caso queira usar o pdfrw para compressão

        # Verifica se o arquivo comprimido foi salvo corretamente
        if os.path.exists(output_path):
            return send_file(output_path, as_attachment=True)
        else:
            return "Erro ao criar o arquivo comprimido.", 500

    except Exception as e:
        return f"Erro ao comprimir o PDF: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)
