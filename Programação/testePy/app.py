import os
import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox
import subprocess

# Função para criar o arquivo .7z
def criar_arquivo_7z():
    # Abrir o diálogo para escolher múltiplos arquivos
    arquivos = filedialog.askopenfilenames(title="Escolha os arquivos", filetypes=[("Todos os Arquivos", "*.*")])
    
    if not arquivos:
        messagebox.showwarning("Nenhum arquivo", "Você não escolheu nenhum arquivo para compactar.")
        return
    
    # Abrir o diálogo para escolher onde salvar o .7z
    salvar_arquivo = filedialog.asksaveasfilename(defaultextension=".7z", filetypes=[("Arquivos 7z", "*.7z")])
    
    if not salvar_arquivo:
        messagebox.showwarning("Sem local", "Você não escolheu onde salvar o arquivo 7Z.")
        return
    
    # Caminho completo para o executável do 7-Zip
    caminho_7zip = r"C:/Program Files/7-Zip/7z.exe"
    
    # Verificar se o 7z.exe existe no caminho fornecido
    if not os.path.exists(caminho_7zip):
        messagebox.showerror("Erro", f"O programa 7-Zip não foi encontrado em {caminho_7zip}.")
        return
    
    # Preparar o comando para o 7-Zip
    try:
        # Comando para executar o 7-Zip com o caminho completo
        comando = [caminho_7zip, 'a', salvar_arquivo] + list(arquivos)
        
        # Executar o comando
        subprocess.run(comando, check=True)
        
        messagebox.showinfo("Sucesso", f"Arquivo 7Z criado com sucesso em:\n{salvar_arquivo}")
    except subprocess.CalledProcessError as e:
        messagebox.showerror("Erro", f"Erro ao criar o arquivo 7Z: {e}")
    except FileNotFoundError:
        messagebox.showerror("Erro", "O programa 7-Zip não foi encontrado. Certifique-se de que está instalado e no caminho correto.")

# Criar a interface gráfica
def criar_interface():
    # Configuração da janela principal
    root = tk.Tk()
    root.title("Criar Arquivo 7Z")
    
    # Tamanho da janela
    root.geometry("300x150")
    
    # Criar o botão de ação
    btn_criar_7z = tk.Button(root, text="Criar Arquivo 7Z", command=criar_arquivo_7z)
    btn_criar_7z.pack(pady=30)
    
    # Iniciar o loop da interface gráfica
    root.mainloop()

# Chamar a função para iniciar o programa
if __name__ == "__main__":
    criar_interface()
