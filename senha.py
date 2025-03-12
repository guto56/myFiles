senhas = []

while True:
    opc = input('Escolha uma opção: [1: Criar senha] [2: Ver senha(s)] [3:Deletar senha] : ')

    if opc == '1':
        nova_senha = input('Digite a senha a ser salva: ')
        senhas.append(nova_senha)
        print('Senha adicionada.')
        continue
    elif opc == '2':
        if len(senhas) == 0:
            print('Nada para listar. Vazio.')
        for indice, senha in enumerate(senhas):
            print(f'{indice}-Senha: {senha}.')
    elif opc == '3':
        deletar_senha_str = input('Digite o índice da senha para deletar: ')

        try:
            indice = int(deletar_senha_str)
            del senhas[indice]
            print('Senha apagada.')
        except Exception:
            print('Erro')
    else:
        print('Opção Incorreta')
        continue