import tkinter as tk
from tkinter import filedialog, messagebox, simpledialog
from PyPDF2 import PdfReader, PdfWriter # type: ignore

def selecionar_pdf():
    # Função para selecionar o arquivo PDF
    arquivo_pdf = filedialog.askopenfilename(filetypes=[("Arquivos PDF", "*.pdf")])
    if arquivo_pdf:
        try:
            # Abrir o PDF selecionado
            pdf_reader = PdfReader(arquivo_pdf)
            total_paginas = len(pdf_reader.pages)
            # Exibir o número de páginas
            label_paginas.config(text=f"Número total de páginas: {total_paginas}")
            botao_deletar.config(state=tk.NORMAL, command=lambda: deletar_paginas(arquivo_pdf, total_paginas))
        except Exception as e:
            messagebox.showerror("Erro", f"Erro ao abrir o PDF: {e}")
    else:
        messagebox.showwarning("Aviso", "Nenhum arquivo foi selecionado.")

def deletar_paginas(arquivo_pdf, total_paginas):
    # Função para deletar as páginas selecionadas
    paginas = simpledialog.askstring("Deletar Páginas", f"Digite os números das páginas a serem deletadas (1 a {total_paginas}), separados por vírgula:")
    if paginas:
        try:
            # Converter a string das páginas em uma lista de números
            paginas_deletadas = [int(p.strip()) - 1 for p in paginas.split(',') if p.strip().isdigit()]
            
            # Abrir o PDF para manipulação
            pdf_reader = PdfReader(arquivo_pdf)
            pdf_writer = PdfWriter()
            
            # Adicionar páginas que não foram deletadas
            for i in range(len(pdf_reader.pages)):
                if i not in paginas_deletadas:
                    pdf_writer.add_page(pdf_reader.pages[i])
            
            # Selecionar o local para salvar o novo PDF
            novo_arquivo = filedialog.asksaveasfilename(defaultextension=".pdf", filetypes=[("PDF", "*.pdf")])
            if novo_arquivo:
                # Salvar o novo PDF
                with open(novo_arquivo, "wb") as f:
                    pdf_writer.write(f)
                messagebox.showinfo("Sucesso", f"Novo arquivo PDF salvo em: {novo_arquivo}")
        except Exception as e:
            messagebox.showerror("Erro", f"Erro ao processar o PDF: {e}")
    else:
        messagebox.showwarning("Aviso", "Nenhuma página foi selecionada.")

# Configuração da janela principal
root = tk.Tk()
root.title("Deletar Páginas de PDF")
root.geometry("400x200")

# Adicionar widgets
label_arquivo = tk.Label(root, text="Selecione um arquivo PDF:")
label_arquivo.pack(pady=10)

botao_abrir = tk.Button(root, text="Abrir PDF", command=selecionar_pdf)
botao_abrir.pack(pady=5)

label_paginas = tk.Label(root, text="Número total de páginas: 0")
label_paginas.pack(pady=10)

botao_deletar = tk.Button(root, text="Deletar Páginas", state=tk.DISABLED)
botao_deletar.pack(pady=10)

# Iniciar a interface gráfica
root.mainloop()
