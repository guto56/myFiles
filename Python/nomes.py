import os
if os.name == 'nt':
    os.system('cls')
else:
    os.system('clear')

#
#

nomes = {
    'nome1': 'Augusto',
    'nome2': 'Ana',
    'nome3': 'Diogo',
    'nome4': 'Fernanda',
    'nome5': 'José',
}

while True:

    for indice, nome in nomes.items():
        print(nome)
    print()
    escolher_nome = input('Escolha um nome da lista acima: ')

    if escolher_nome in nomes:
        print('Válido')

    else:
        print('Errado')