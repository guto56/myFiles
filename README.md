made by Augusto Luiz Nunes Corso

importar:
git remote add origin https://github.com/guto56/myFiles

//import ghostscript
import os

def compress_pdf(input_pdf):
    # Verifica se o arquivo existe
    if not os.path.exists(input_pdf):
        print(f"O arquivo {input_pdf} não foi encontrado.")
        return
    
    # Define o nome do arquivo de saída
    output_pdf = "compressed_" + input_pdf

    # Comando do Ghostscript para compressão
    args = [
        "gs", 
        "-sDEVICE=pdfwrite",  # Define o dispositivo de saída como PDF
        "-dCompatibilityLevel=1.4",  # Define a compatibilidade do PDF
        "-dPDFSETTINGS=/ebook",  # Define um nível de compressão médio
        "-dNOPAUSE",  # Não pausa entre páginas
        "-dQUIET",  # Não exibe mensagens de erro
        "-dBATCH",  # Processa todos os arquivos
        "-sOutputFile=" + output_pdf,  # Nome do arquivo comprimido
        input_pdf  # Arquivo de entrada
    ]

    # Chama o Ghostscript
    ghostscript.Ghostscript(*args)
    print(f"Arquivo comprimido salvo como {output_pdf}")

if __name__ == "__main__":
    # Solicita o nome do arquivo
    input_pdf = input("Digite o nome do arquivo PDF a ser comprimido: ")
    compress_pdf(input_pdf)


    #precisa baixar ghostscript
