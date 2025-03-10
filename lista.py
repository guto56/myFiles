import os

lista_de_compra = []

while True:
    print('[1: Adicionar] [2: Remover] [3: Ver Lista] [4: Sair]')
    opc = input('O que deseja fazer? ')

    if opc == '1':
        produto_para_adicionar = input('Digite o que quer Adicionar: ')
        lista_de_compra.append(produto_para_adicionar)
    elif opc == '2':
        os.system('cls')
        produto_para_remover = input('Produto para Remover: ')
        if produto_para_remover in lista_de_compra:
            lista_de_compra.remove(produto_para_remover)
            print('Produto Removido.')
        else:
            print('Não existe esse produto na lista.')
    elif opc == '3':
        os.system('cls')
        contador = 0
        if len(lista_de_compra) == 0:
            print('Não existe nada na lista.')
        else:
            for item in lista_de_compra:
                contador += 1
                print(contador, ': ', item)
    elif opc == '4':
        os.system('cls')
        break
    else:
        os.system('cls')
        print('Opção Inválida.')
