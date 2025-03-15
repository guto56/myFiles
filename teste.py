import os

if os.name == 'nt':
    os.system('cls')
eelse:
    os.system('clear')

lista = []

while True:
    opc = input('O que deseja fazer? A[Adicionar] / R[Remover] / L[Listar]: ').lower()

    if opc == 'a':
        adicionar = input('O que deseja adicionar? ')
        lista.append(adicionar)
    elif opc == 'r':
        try:
            if len(lista) < 1:
                print('Nada para remover')
                continue
            remover = input('Digite o índice que deseja remover: ')
            remover_i = int(remover)
            del lista[remover_i]
            print('Removido.')
        except:
            print('Erro')
    elif opc == 'l':
        if len(lista) < 1:
            print('Nada para listar.')
        for i, item in enumerate(lista):
            print(i, ':', item)
    else:
        print('Selecione a opção correta.')
