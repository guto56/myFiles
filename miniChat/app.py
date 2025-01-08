import tkinter as tk
from tkinter import simpledialog, messagebox
import pickle
import os
import base64
import binascii  # Adicionando a importação de binascii

# Função para carregar os dados do arquivo
def carregar_dados():
    if os.path.exists("dados_chat.pkl"):
        with open("dados_chat.pkl", "rb") as f:
            return pickle.load(f)
    return {'usuarios': [], 'mensagens': []}

# Função para salvar os dados (usuários e mensagens)
def salvar_dados(dados):
    with open("dados_chat.pkl", "wb") as f:
        pickle.dump(dados, f)

# Função para carregar os dados de login
def carregar_dados_login():
    if os.path.exists("usuarios_login.pkl"):
        try:
            with open("usuarios_login.pkl", "rb") as f:  # Abrir como binário
                encoded_data = f.read()  # Lê os dados binários
                # Verifica se o conteúdo não está vazio
                if encoded_data:
                    decoded_data = base64.b64decode(encoded_data)  # Decodificando os dados
                    dados = pickle.loads(decoded_data)  # Desserializando os dados
                    return dados
                else:
                    print("O arquivo está vazio.")
        except (binascii.Error, pickle.UnpicklingError) as e:
            print(f"Erro ao decodificar ou desserializar os dados: {e}")
    return {}

# Função para salvar os dados de login
def salvar_dados_login(dados, usuario_logado=None):
    if usuario_logado:
        dados['usuario_logado'] = usuario_logado
    encoded_data = base64.b64encode(pickle.dumps(dados)).decode('utf-8')  # Codificando os dados
    with open("usuarios_login.pkl", "wb") as f:
        f.write(encoded_data.encode('utf-8'))  # Salvando os dados codificados em base64

# Função de registro
def registrar_usuario():
    def salvar_registro():
        nome = nome_entry.get()
        senha1 = senha_entry1.get()
        senha2 = senha_entry2.get()
        
        if senha1 != senha2:
            messagebox.showerror("Erro", "As senhas não coincidem!")
            return

        dados_login = carregar_dados_login()
        
        if nome in dados_login:
            messagebox.showerror("Erro", "Usuário já registrado!")
            return
        
        dados_login[nome] = senha1
        salvar_dados_login(dados_login)
        messagebox.showinfo("Sucesso", "Registro realizado com sucesso!")
        registrar_window.destroy()
        tela_login()

    registrar_window = tk.Toplevel()
    registrar_window.title("Registro")
    
    tk.Label(registrar_window, text="Nome de Usuário:").pack(pady=5)
    nome_entry = tk.Entry(registrar_window)
    nome_entry.pack(pady=5)

    tk.Label(registrar_window, text="Senha:").pack(pady=5)
    senha_entry1 = tk.Entry(registrar_window, show="*")
    senha_entry1.pack(pady=5)

    tk.Label(registrar_window, text="Confirmar Senha:").pack(pady=5)
    senha_entry2 = tk.Entry(registrar_window, show="*")
    senha_entry2.pack(pady=5)

    tk.Button(registrar_window, text="Registrar", command=salvar_registro).pack(pady=10)

# Função de login
def tela_login():
    def verificar_login():
        nome = nome_entry.get()
        senha = senha_entry.get()

        dados_login = carregar_dados_login()

        if nome in dados_login and dados_login[nome] == senha:
            salvar_dados_login(dados_login, nome)  # Salva o nome do usuário como logado
            login_window.destroy()
            criar_interface(nome)  # Passando nome para a interface do chat
        else:
            messagebox.showerror("Erro", "Nome de usuário ou senha incorretos!")

    login_window = tk.Tk()
    login_window.title("Login")
    
    tk.Label(login_window, text="Nome de Usuário:").pack(pady=5)
    nome_entry = tk.Entry(login_window)
    nome_entry.pack(pady=5)

    tk.Label(login_window, text="Senha:").pack(pady=5)
    senha_entry = tk.Entry(login_window, show="*")
    senha_entry.pack(pady=5)

    tk.Button(login_window, text="Entrar", command=verificar_login).pack(pady=10)
    tk.Button(login_window, text="Registrar", command=registrar_usuario).pack(pady=5)

    login_window.mainloop()

# Função para enviar uma nova mensagem
def enviar_mensagem():
    global nome_usuario  # A variável nome_usuario precisa ser global
    usuario = nome_usuario
    if usuario == '':
        messagebox.showerror("Erro", "Por favor, digite seu nome.")
        return
    mensagem = campo_mensagem.get()
    if mensagem == '':
        messagebox.showerror("Erro", "Por favor, digite uma mensagem.")
        return

    dados = carregar_dados()
    dados['usuarios'].append(usuario)
    dados['mensagens'].append(mensagem)
    salvar_dados(dados)
    
    atualizar_chat(dados)

    campo_mensagem.delete(0, tk.END)

# Função para atualizar a área de chat com as mensagens
def atualizar_chat(dados):
    global nome_usuario  # A variável nome_usuario precisa ser global
    chat_text.config(state=tk.NORMAL)  # Tornar o campo de texto editável temporariamente para atualizar
    chat_text.delete(1.0, tk.END)

    for i, msg in enumerate(dados['mensagens']):
        usuario = dados['usuarios'][i]
        if usuario == nome_usuario:
            chat_text.insert(tk.END, f"{usuario}: {msg}\n", 'direita')
        else:
            chat_text.insert(tk.END, f"{usuario}: {msg}\n", 'esquerda')

    chat_text.yview(tk.END)
    chat_text.config(state=tk.DISABLED)  # Tornar o campo de texto somente leitura novamente

# Função para tratar o clique em uma mensagem para apagá-la com confirmação
def apagar_mensagem(event):
    try:
        linha = chat_text.index(tk.CURRENT)
        linha_num = int(linha.split('.')[0]) - 1  # Convertendo para o índice de mensagem
        dados = carregar_dados()
        usuario = nome_usuario

        if dados['usuarios'][linha_num] == usuario:
            # Exibe uma caixa de diálogo de confirmação
            confirmar = messagebox.askyesno("Confirmar", "Você tem certeza que deseja apagar essa mensagem?")
            
            if confirmar:
                dados['mensagens'][linha_num] = "Mensagem apagada."
                salvar_dados(dados)
                atualizar_chat(dados)
    except Exception as e:
        print(f"Erro ao apagar mensagem: {e}")

# Função para criar a interface do chat
def criar_interface(nome_usuario_global):
    global nome_usuario, campo_mensagem, chat_text
    nome_usuario = nome_usuario_global  # Definir globalmente o nome do usuário
    root = tk.Tk()
    root.title("Chat em Tempo Real")
    root.geometry("400x600")

    # Chat display
    chat_text = tk.Text(root, wrap=tk.WORD, height=20, width=50)
    chat_text.pack(padx=10, pady=10)
    chat_text.tag_configure('esquerda', justify='left')
    chat_text.tag_configure('direita', justify='right')

    # Tornar o chat somente leitura
    chat_text.config(state=tk.DISABLED)

    # Caixa de entrada de mensagem
    campo_mensagem = tk.Entry(root, width=40)
    campo_mensagem.pack(side=tk.LEFT, padx=10, pady=10)

    # Botão para enviar mensagem
    btn_enviar = tk.Button(root, text="Enviar", command=enviar_mensagem)
    btn_enviar.pack(side=tk.LEFT, padx=5)

    # Botão para sair e fazer logout
    def logout():
        root.destroy()
        dados_login = carregar_dados_login()
        salvar_dados_login(dados_login, None)  # Remove o usuário logado
        tela_login()

    btn_logout = tk.Button(root, text="Sair", command=logout)
    btn_logout.pack(side=tk.LEFT, padx=5, pady=10)

    # Permite clicar na mensagem para apagá-la
    chat_text.bind("<Button-1>", apagar_mensagem)

    # Carregar mensagens já existentes
    dados = carregar_dados()
    atualizar_chat(dados)

    root.mainloop()

# Função para verificar se há um usuário logado na última vez
def verificar_usuario_logado():
    dados_login = carregar_dados_login()
    usuario_logado = dados_login.get('usuario_logado', None)
    if usuario_logado:
        criar_interface(usuario_logado)
    else:
        tela_login()

# Iniciar a aplicação verificando se há um usuário logado
verificar_usuario_logado()
