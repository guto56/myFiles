#made by augusto.
import os
import copy

if os.name == 'nt':
    os.system('cls')  # Limpa a tela no Windows
else:
    os.system('clear')  # Limpa a tela no Linux/Mac

produtos = [
    {'nome': 'Produto 5', 'preco': 10.00,},
    {'nome': 'Produto 1', 'preco': 22.32,},
    {'nome': 'Produto 3', 'preco': 10.11,},
    {'nome': 'Produto 2', 'preco': 105.87,},
    {'nome': 'Produto 4', 'preco': 69.90,},
]

novos_produtos = [
    {**produto, 'preco': produto['preco'] * 1.05}
    for produto in produtos
]


# produtos = [
#     {'nome': 'p1', 'preço': 20,},
#     {'nome': 'p2', 'preço': 10,},
#     {'nome': 'p3', 'preço': 30,},
# ]

# novos_produtos = [
#     {**produto, 'preço': produto['preço'] * 1.05}
#     for produto in produtos
# ]

print(novos_produtos)