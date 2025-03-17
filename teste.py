import os
import pprint

if os.name == 'nt':
     os.system('cls')
else:
     os.system('clear')

linhas_colunas = [(x, y) for x in range(11) for y in range(7)]

print(linhas_colunas)˝