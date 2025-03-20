#made by augusto.
import os

if os.name == 'nt':
    os.system('cls')  # Limpa a tela no Windows
else:
    os.system('clear')  # Limpa a tela no Linux/Mac

teste = 'teste com sucesso.'

def soma(x, y):
    return x + y