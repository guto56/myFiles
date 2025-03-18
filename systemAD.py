#made by augusto.
import os

if os.name == 'nt':
    os.system('cls')  # Limpa a tela no Windows
else:
    os.system('clear')  # Limpa a tela no Linux/Mac

lista = []

while True:
    opc = input('Digite de 1 até 4: ')

    if opc == '1':
        print('Opc 1')
    elif opc == '2':
        print('Opc 2')
    elif opc == '3':
        print('Opc 3')
    elif opc == '4':
        break
    else:
        print("Opc invalida")
        continue