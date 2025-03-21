#made by augusto.
import os

if os.name == 'nt':
    os.system('cls')  # Limpa a tela no Windows
else:
    os.system('clear')  # Limpa a tela no Linux/Mac

lista = [
    {'nome': 'Prod1', 'preco': 10,},
    {'nome': 'Prod2', 'preco': 10,},
    {'nome': 'Prod3', 'preco': 10,},
    {'nome': 'Prod4', 'preco': 10,},
    {'nome': 'Prod5', 'preco': 10,},
]

print(*lista)