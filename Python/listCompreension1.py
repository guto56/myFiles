import os
import pprint
os.system('cls')

# print(list(range(10)))

# lista = [numero for numero in range(10)]

# for numero in range(10):
#     lista.append(numero)
#     print(numero)

# print(lista)

# def p(v):
#     pprint.pprint(v)

# produtos = [
#     {'nome': 'p1', 'preço': 20,},
#     {'nome': 'p2', 'preço': 10,},
#     {'nome': 'p3', 'preço': 30,},
# ]

# novos_produtos = [
#     {**produto, 'preço': produto['preço'] * 1.05}
#     for produto in produtos
# ]

# print(novos_produtos)
# print(*novos_produtos, sep='\n')

# p(novos_produtos)

lista = [n for n in range(10) if n < 5]
print(lista)