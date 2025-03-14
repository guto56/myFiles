import os

# Detectar o sistema operacional
if os.name == 'nt':  # Windows
    os.system('cls')
else:  # Sistemas Unix (Linux/macOS)
    os.system('clear')

lista = [
    {'nome': 'Luiz', 'sobrenome': 'miranda'},
    {'nome': 'Maria', 'sobrenome': 'Oliveira'},
    {'nome': 'Daniel', 'sobrenome': 'Silva'},
    {'nome': 'Eduardo', 'sobrenome': 'Moreira'},
    {'nome': 'Aline', 'sobrenome': 'Souza'},
]

def ordena(item):
    print(item)
    return item

print(*lista)
