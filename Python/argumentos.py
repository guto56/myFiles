import os

if os.name == 'nt':
    os.system('cls')
else:
    os.system('clear')

a, b = 1, 2
a, b = b, a

# print(a, b)

# (a1, a2), (b1, b2) = pessoa.items()

# print(a1, a2)
# print(b1)

# for chave, valor in pessoa.items():
#     print(chave, ':', valor)

pessoa = {
    'nome': 'Aline',
    'sobrenome': 'Souza',
}

dados_pessoa = {
    'idade': 16,
    'altura': 1.6,
}

pessoa_completa = {**pessoa, **dados_pessoa}

# print(pessoa_completa)

# args = argumentos não nomeados
# kwargs = argumentos nomeados

def mostrar_argumentos(*args, **kwargs):
    print('Não Nomeados:', args)

    for chave, valor in kwargs.items():
        print(chave, valor)

# mostrar_argumentos(1, 4, 7, nome='teste', numero=2)
# mostrar_argumentos(**pessoa_completa)

config = {
    'arg1': 1,
    'arg2': 2,
    'arg3': 3,
    'arg4': 4,
    'arg5': 5,
}

mostrar_argumentos(**config)