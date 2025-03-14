import os

if os.name == 'nt':
    os.system('cls')
else:
    os.system('clear')

lista = []

while True:
    opc = input('O que deseja fazer? A[Adicionar] / R[Remover] / L[Listar]: ').lower()

    if opc == 'a':
        adicionar = input('O que deseja adicionar? ')
        lista.append(adicionar)
    elif opc == 'r':
        remover = input('Digite o índice que deseja remover: ')
        try:
            
        continue
    elif opc == 'l':
        for i, item in enumerate(lista):
            print(i, ':', item)
    else:
        print('Selecione a opção correta.')
