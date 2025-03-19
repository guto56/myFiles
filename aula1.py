#made by augusto.
import os
import sys
 

if os.name == 'nt':
    os.system('cls')  # Limpa a tela no Windows
else:
    os.system('clear')  # Limpa a tela no Linux/Mac

print(* sys.path, sep='\n')