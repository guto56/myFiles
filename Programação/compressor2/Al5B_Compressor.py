import tkinter as tk
import tkinter.font as tkfont
from tkinter import filedialog, messagebox
from tkinter import ttk  # Importando a Progressbar
from PIL import Image
import fitz  # PyMuPDF
import os
import io

# Códigos de licença válidos
codigos_licenca = [
    "260b27a7-ce8c-4acf-be7d-1a260434ee9d",
    "f1c10e16-b41a-47d3-bc98-d87bf6a7df5a",
    "4b7ed01a-b76a-42b1-a745-d79b99f5ab61",
    "9988a7a1-d43f-420b-a05f-3e4446d60fe7",
    "b717173a-f499-4c6d-bce7-c8f95ed60fdf",
    "cb4e53fc-dc29-4a8e-bf87-82f2052a6b32",
    "e7b30755-f9b4-4b8a-a189-2f582b6a245d",
    "d25946a5-0e1c-4697-9a19-e9d8ab415b67",
    "5da5e0fe-58de-4d8f-b38c-bd2786cfed62",
    "a1249fd6-4b4c-4e96-b4a5-b9db6cd4b801",
    "441b77a0-3f79-4694-8a8f-d18b04185c8d",
    "62b8c3e1-4697-42c1-b799-622b5c7e878d",
    "1b5eec2c-c918-418d-902b-2db4a2cbfbf9",
    "55756d8b-f25e-46a0-b28e-c9a12e9fc68c",
    "45a6d6fc-c5e7-492d-bd9e-cc8b8499e58f",
    "1f64863a-5e4e-4f85-9b0f-b5d1262ddefa",
    "4f3d813d-9b5a-43b9-b7c4-900f7a762b84",
    "83510938-17f0-4969-a1f6-11b8d0c10c2b",
    "734b7c80-c0f5-45b5-b295-d2e90d62fae6",
    "5f8f79b9-51a9-4292-87d6-b7d1c9ec6ca8",
    "75e6b647-9f72-4a27-9f91-b41c45393d0d",
    "b5f85de9-d74e-4d3f-9d97-287053fe0900",
    "9ad5bc85-0d72-42d5-b14f-eeb351b57533",
    "2b9e5e66-d2a2-4a89-a074-50d849504d5c",
    "95c8f678-0b63-4028-9c61-1f0b457f99a9",
    "3ed7177c-0172-418f-b86f-cd23c7717c81",
    "57833f3c-f5f9-4375-b0fa-56ca5193c208",
    "15f676a7-b2f7-4df7-8acb-67ad35871b94",
    "cd30f2c7-9de4-4b71-a85e-4746c14e3c78",
    "7609e5d9-e4a9-4501-a7db-e0f9464d12d2",
    "ad7f7b2d-dcae-40f6-b9de-b88a3fa57413",
    "905c4a63-5e92-40e5-930f-e019a75558ea",
    "eea95d0a-bb5a-4d9e-b9b4-f63a849ce0a1",
    "396d08a2-3135-417f-b592-e6ef2a8b6a74",
    "2c9d5d77-dc35-4fc9-b8d0-95ba8717f21f",
    "6d0b5c1f-b0b5-4c5d-8616-7f607a7da3f7",
    "f7b6cf5b-e4b7-4667-9c09-334c6d1d3e52",
    "22698933-f51d-4a77-a37d-0b46c4c4406e",
    "f5db1c77-44bc-47e1-aef1-bf451ba11d76",
    "eed019a6-cf0d-48a7-a9cf-e56b81876f7d",
    "685d0e60-cc6d-4b9b-950f-d16db739c663",
    "26c1d021-110d-4b87-85c2-4d5c2ad7f1b3",
    "9c2aeb13-cc1c-4899-8f88-517799349f5d",
    "95d5782e-7177-4622-b974-5b9a1e09fcbf",
    "dc110216-b289-43ea-82cc-dfc43ffb15a3",
    "bbf7e125-f8c4-4d9c-b7fa-896c5b2e2157",
    "65e9a865-c0ca-46cc-b2a4-e658b801eb99",
    "b3f8a6f4-b9f2-4a4c-b74b-4f385d82b67f",
    "39c1f158-5137-4693-a96b-7d7ecb6a2c60",
    "0a3f743b-c393-47b9-8d51-1999e9ff87d2",
    "82ef5d36-6b7a-441a-b1c4-45142058f264",
    "eb1ef9c8-343d-431f-b7ae-b0b56a6fd433",
    "fbc244ea-8a69-47b9-b46a-e25c56ef87be",
    "b75db6b5-20b3-42b4-b7a9-09e3dbefb5c9",
    "2b738679-d4ff-4568-b82d-1fcb3912c7a0",
    "6d6cfe10-d799-4f75-940e-587b7ec9ad91",
    "b2990e2e-9f10-4620-b3e6-2c4efbc9f92e",
    "33a6ff4d-2269-4de4-9286-2542f2de6743",
    "abb79c74-c79d-41cf-bf43-6f8795011b89",
    "46d79b6f-0354-4c7c-bdf2-cb8c177d6c8c",
    "3a3c7d87-45cc-45d0-b289-cf717b4fa490",
    "908a6dcb-b6d1-4b06-87bc-6215f94bb9b2",
    "7399d9b2-91a1-472d-bf7b-f5b7f39a0512",
    "e4a6c85b-94e2-48d8-97f6-f5c14fcb7c1f",
    "f071ccd3-f25e-4a50-9a8d-b8dbb1f75ed5",
    "f3c4a1c0-bd58-40ab-b9ff-33da36c1ea15",
    "f9b03f12-c3d5-472b-b89b-e8b7edb11ff4",
    "f97ef58d-d49f-4686-a58b-f81c07f0bc09",
    "fb62d1b9-314b-4641-9b07-b010a8b96018",
    "045de8a6-1c3b-496b-b499-e3c32f6cc2e7",
    "0cf5be68-7d97-4f9d-a536-d9b7ab0a07b4",
    "36d4555d-b6cd-4d7f-bb9d-477207038d35",
    "28d8e126-3387-4e51-b3be-4e98a7edc0a9",
    "c5eaf6a9-e764-4977-88a1-8d457e88e6ae",
    "ff273b76-ef99-44db-b18e-2287c070b864",
    "b3d634d8-d375-43b4-b150-bff7b4519f43",
    "c4b957ae-3ca7-4c33-bf70-8c7e388442b2",
    "e5f963ff-989b-4db0-a1fc-f7086eac552b",
    "de7082ae-c276-4cf0-a0ca-5f88ca62b7a1",
    "8497c933-8ffb-4a1b-a09b-2780f77c76a7",
    "46096d68-745f-44fa-b48e-2e3f7d0d7e24",
    "7b079a1e-d7bc-4c09-bf5c-d9a8f7fc9fe0",
    "86f1a658-3219-4a8f-8a24-d708b295e2ed",
    "adfcf322-08bc-4eb2-bbb4-73936fa7f259",
    "4f0c61cd-d22f-46da-8cd7-f31f2b5caed0",
    "00f63c66-9a59-42d5-9305-b9b93c1e9785",
    "88a387e0-99ea-4338-b006-5ab01999fe5d",
    "b4360a4b-c8b5-4782-b510-b79e018a1a09",
    "b3478fcf-6b9e-4d01-b3ad-e1d59d5d4971",
    "7fe4170d-87a2-4e55-b1b8-9da8269c3e5c",
    "93db20f4-3f30-4647-a6bb-d730fc3ff9ae",
    "4f612b36-f075-42b7-b03d-e9436b95790c",
    "afba7eb0-b7be-41a9-91c2-d30e2e1cd9bb",
    "50d1a392-46a4-4750-9b1e-bf268b8d7f90",
    "319674f5-4655-45ca-90b9-3d9de4511d96",
    "0e34b27b-1fa5-4326-beb3-e3f2a505e62e",
    "c9b1e9e4-703f-4e09-8b6f-4e7479247d13",
    "fdbf56fe-6be4-4d3b-b4b7-faba2c839aeb",
    "02f7b7b4-fbe1-4859-977f-e9f23e669abf",
    "b607d547-d682-4a1d-8c62-78cf6e9e407d",
    "0f364b30-b340-4c42-b5c5-05000b68c3d8",
    "41eaf737-0bcf-4384-88b3-c09eaadd6491",
    "2c051bc7-2f30-4090-9f5a-529e2689d509",
    "9603b72e-54da-4c7f-8053-d26e1ff45b88",
    "c6fa17e3-412d-45b1-a4cf-01615db71a97",
    "eb2550ed-66da-4bb4-9a9d-d225231f9256",
    "ed9c5f89-9f74-490b-9ee1-11ea21851f0f",
    "5f4fca39-bf36-43fc-b0f6-b599eff9f0fc",
    "256084a9-cdb7-4602-9782-e36ff603ad07",
    "4584fc5b-50eb-45b5-9bfa-64c47a998027",
    "7ed6d1c7-4c74-4fd3-b5b0-f07d43c5cce0",
    "8b44096f-1c22-4d6e-b438-2734b7d1dcb7",
    "d04b82ed-cd3e-432d-bfa7-f7f11042ef99",
    "b14376d2-7db4-4cfa-94c2-3bc1d3624db8",
    "c9fd2a37-b7fc-46f5-89c4-71b18b80b5d3",
    "5de39b6e-5a6b-4de2-a9bc-4ec30976775e",
    "23524b84-5b92-44e4-bb59-5cb8c1154cf3",
    "c01d9332-d8c3-411b-8295-16bff8a9eb59",
    "50b1bb87-684d-487b-b73b-b1b3cc3d7b26",
    "8e1e4d87-c907-42f4-9a53-cfeb0b84de23",
    "ca69bc8e-3d9c-49ad-b0ab-f7037243ec1b",
    "d897b4d9-b96c-42b3-a2b1-631fa0bdf8b0",
    "12bfc6c7-f598-46d0-87b2-b10ff5b26c2e",
    "7b73607d-03e0-4a66-93f9-b31c0248466c",
    "5b05a9f8-bf39-4674-a9e9-7b5f02440d1f",
    "67bcdb6f-8b61-4970-b0bb-b8a6bca5c03f",
    "d57085d0-98be-4678-8b76-908beff3ff29",
    "58cd67b1-6982-409f-aef1-d46ac789cd62",
    "ee842ba7-022b-49b8-a2f5-b3c8b64b53ca",
    "19a2d39f-c4c1-4b0d-a476-b58a0818e02c",
    "96170290-0cb4-4882-93da-ef032458d58d",
    "37ef97ae-ea5e-417a-88f2-ec0e6a5c5e23",
    "79e2b885-59bb-4239-9a5d-839c142832f9",
    "c758028e-9c02-4f3a-b6b0-34df71a69b69",
    "8fd2ddeb-c578-487f-b6d7-28d0359b2a7e",
    "259f2b69-e9b3-4699-b8cf-b4707cf0b4ef",
    "a21f3b72-e1a7-47b3-9e83-1b9acda51db2",
    "10d7a03e-4bfc-4b3c-8b74-4459e506314b",
    "80b31cf4-b6d2-47d1-a115-4b907eaf6785",
    "df61b080-bb72-437e-8a2f-6f6c0f1709ca",
    "c04b5bc9-2d28-4a2e-87e1-3f47fa77b93a",
    "68c06a1c-22db-485b-a598-cf6c8e4b32c3",
    "b9a18965-c7f1-43a0-a408-2e63d3b827b7",
    "f3837a6c-ea0d-4c1e-b229-e55be23073ea",
    "66a33a63-f6f9-4b2a-8d3b-2446c10a2483",
    "3bc18d98-64d9-40d3-9c61-c07ed4d5fcd4",
    "56e2e21b-45f4-4e26-b470-19c474a98c8c",
    "b004d2d0-e64d-46d1-9604-bff97ed1f0c4",
    "b26d4a1d-4b65-4c59-b93f-6e9e2e1b0bc3",
    "dc208c6f-d190-4848-a4d5-f6ca747b82db",
    "458e4f96-6b83-442b-9089-b739f6a7a659",
    "522a0357-cd92-4a22-85fd-41bc0c99a512",
    "4828c26e-c9c5-479d-bd43-bcb90f75b107",
    "0cb52b3a-cffb-4c77-bc62-4e9ffba9c680",
    "2f2ff4fe-d660-45b2-9f72-2bc619e3e825",
    "6f8a8da7-0516-4505-b7b5-c6f53e021c25",
    "a01e6ef2-15b4-4b7e-baf5-bb1ca15be6ba",
    "51f52262-c2f2-4cfd-a1e4-6b92394e8eeb",
    "39543fbe-0971-4325-89d1-631b7dffde7b",
    "f177f585-4c71-4d67-80fe-f169bfdd0b49",
    "b3c2d5f4-c575-4a5c-98b5-5241f7b41ed6",
    "e1b03c90-b441-4d73-88cf-bf209e819a3c",
    "efb3cf9d-70b2-49c7-929b-9933d464d9c3",
    "a65b9136-5289-41b2-87c4-c3641baf6f76",
    "b6a06be0-5107-46ff-8ac5-b1d73f2a6e23",
    "fcb6e2fa-d226-46b0-944f-b5e8c8a045ff",
    "7a8397b5-0165-4fa0-8da2-491dbb419377",
    "21f0b743-7c91-40f1-810b-bc8315e8cb69",
    "da321d0e-b32d-4e87-b179-c295ad926171",
    "9f98c393-dff0-4630-8d27-c3db58e3792e",
    "ce9bc6e4-490d-4bc6-bf49-bba0e1b5ab1f",
    "2f04a567-b45e-470e-bbe4-67699d6e2822",
    "a3c515dd-ecb5-4c22-b8e4-dca37b0796b2",
    "c6c019a6-49ad-4b7f-a2ff-51ad7c4a597f",
    "63f349ec-7ec7-4b3e-87ff-73c24938b209",
    "d8354640-0218-4d8b-bd2f-68e3a36ef30b",
    "f4bfa7ea-9878-4e32-9e0c-c538d9d8e87d"
]


# Função para ler o arquivo de configurações
def ler_config():
    try:
        with open("licenca.txt", "r") as f:
            return f.read().strip()  # Retorna a licença salva
    except FileNotFoundError:
        return ""  # Se não existir, retorna string vazia

# Função para salvar a licença no arquivo
def salvar_licenca(licenca):
    with open("licenca.txt", "w") as f:
        f.write(licenca)

# Função para escolher o arquivo PDF
def escolher_arquivo():
    caminho_arquivo = filedialog.askopenfilename(filetypes=[("Arquivos PDF", "*.pdf")])
    if caminho_arquivo:
        caminho_texto.delete(1.0, tk.END)  # Limpar texto atual
        caminho_texto.insert(tk.END, caminho_arquivo)  # Exibir caminho do arquivo no campo de texto

# Função para reduzir a qualidade das imagens
def reduzir_imagem(imagem_pil):
    # Salvar imagem comprimida com qualidade 45%
    imagem_comprimida = io.BytesIO()
    imagem_pil.save(imagem_comprimida, format='JPEG', quality=45)
    return imagem_comprimida.getvalue()

# Função para atualizar a barra de progresso
def atualizar_barra_progresso(valor, total):
    progresso['value'] = (valor / total) * 100
    janela.update_idletasks()

# Função para processar o PDF
def processar_pdf():
    config_uso = ler_config()
    
    if not config_uso:
        mostrar_tela_licenca()
        return
    
    caminho_arquivo = caminho_texto.get(1.0, tk.END).strip()
    
    if not caminho_arquivo or not os.path.exists(caminho_arquivo):
        messagebox.showerror("Erro", "Por favor, selecione um arquivo PDF válido.")
        return
    
    try:
        # Abrir o PDF com PyMuPDF
        documento = fitz.open(caminho_arquivo)
        
        # Criar uma lista para armazenar as imagens
        imagens_comprimidas = []
        
        # Atualizando a barra de progresso
        total_paginas = len(documento)
        atualizar_barra_progresso(0, total_paginas)
        
        # Iterar por todas as páginas do PDF e convertê-las em imagens
        for pagina_num in range(total_paginas):
            pagina = documento.load_page(pagina_num)
            imagem_bytes = pagina.get_pixmap(matrix=fitz.Matrix(0.8, 0.8)).tobytes("jpeg")  # Aumentando a resolução para 2x
            imagem_pil = Image.open(io.BytesIO(imagem_bytes))  # Carregar a imagem com Pillow
            
            # Reduzir a qualidade da imagem
            imagem_comprimida = reduzir_imagem(imagem_pil)
            
            # Adicionar a imagem comprimida à lista
            imagens_comprimidas.append(imagem_comprimida)
            
            # Atualizar a barra de progresso
            atualizar_barra_progresso(pagina_num + 1, total_paginas)
        
        # Gerar o novo caminho para salvar o PDF com as imagens comprimidas
        nome_arquivo = os.path.basename(caminho_arquivo)
        caminho_saida = os.path.join(os.path.dirname(caminho_arquivo), f"pdf_comprimido_{nome_arquivo}")
        
        # Criar o novo PDF a partir das imagens
        pdf_novo = fitz.open()
        for imagem_comprimida in imagens_comprimidas:
            imagem_pil = Image.open(io.BytesIO(imagem_comprimida))
            imagem_pil.save("temp.jpg", format="JPEG")  # Salvar a imagem comprimida temporariamente
            rect = fitz.Rect(0, 0, imagem_pil.width, imagem_pil.height)  # Definir o tamanho da página
            pagina = pdf_novo.new_page(width=rect.width, height=rect.height)
            pagina.insert_image(rect, filename="temp.jpg")  # Inserir a imagem na página do PDF
        
        # Salvar o novo PDF
        pdf_novo.save(caminho_saida)
        pdf_novo.close()
        
        # Exibir mensagem de sucesso
        messagebox.showinfo("Sucesso", f"PDF criado com sucesso! Salvo em: {caminho_saida}")
    
    except Exception as e:
        messagebox.showerror("Erro", f"Erro ao processar o PDF: {str(e)}")

# Função para mostrar a tela de licença
def mostrar_tela_licenca():
    tela_licenca = tk.Toplevel(janela)
    tela_licenca.title("Verificar Licença")
    
    # Definir fonte para a tela de licença
    fonte_padrao = tkfont.Font(family="Segoe UI", size=12)
    
    tk.Label(tela_licenca, text="Digite seu código de licença:", font=fonte_padrao).pack(pady=10)
    
    campo_licenca = tk.Entry(tela_licenca, font=fonte_padrao, width=40)
    campo_licenca.pack(pady=10)
    
    def verificar_licenca():
        codigo = campo_licenca.get().strip()
        if codigo in codigos_licenca:
            salvar_licenca(codigo)  # Salvar o código de licença
            tela_licenca.destroy()
            messagebox.showinfo("Licença Verificada", "Licença verificada com sucesso! Você pode agora usar o programa sem limitações.")
        else:
            messagebox.showerror("Erro", "Código de licença inválido.")
    
    tk.Button(tela_licenca, text="Verificar", command=verificar_licenca, font=fonte_padrao, bg="lightgreen", relief="raised").pack(pady=10)

# Função principal para configurar a interface gráfica
def criar_interface():
    global janela, progresso, caminho_texto, label, botao_abrir, botao_comecar, rodape, botao_modo
    
    janela = tk.Tk()
    janela.title("Compressor de PDF")
    janela.geometry("500x400")  # Ajustando o tamanho da janela para incluir a barra de progresso
    
    # Definindo a fonte mais casual usando o tkFont
    fonte_padrao = tkfont.Font(family="Segoe UI", size=12)

    # Texto explicativo
    label = tk.Label(janela, text="Escolha um arquivo PDF:", font=fonte_padrao)
    label.pack(pady=10)

    # Campo de texto para exibir o caminho do arquivo
    caminho_texto = tk.Text(janela, height=1, width=40, font=fonte_padrao)
    caminho_texto.pack(pady=10)

    # Botões para escolher arquivo ou arrastar
    botao_abrir = tk.Button(janela, text="Escolher Arquivo", command=escolher_arquivo, font=fonte_padrao, bg="lightblue", relief="raised")
    botao_abrir.pack(pady=10)

    # Barra de progresso
    progresso = ttk.Progressbar(janela, orient="horizontal", length=400, mode="determinate")
    progresso.pack(pady=20)

    # Botão para começar o processamento
    botao_comecar = tk.Button(janela, text="Começar", command=processar_pdf, font=fonte_padrao, bg="lightgreen", relief="raised")
    botao_comecar.pack(pady=20)

    # Rodapé
    rodape = tk.Label(janela, text="Após clicar em 'Começar', aguarde a barra chegar ao final.", font=("Segoe UI", 10))
    rodape.pack(pady=10)

    # Inicializar a interface
    janela.mainloop()

# Iniciar o programa
if __name__ == "__main__":
    criar_interface()
