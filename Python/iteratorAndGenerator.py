#made by augusto.
import os
import sys

if os.name == 'nt':
    os.system('cls')  # Limpa a tela no Windows
else:
    os.system('clear')  # Limpa a tela no Linux/Mac

# Generator expression, Iterables e Iterators em Python
iterable = ['Eu', 'Tenho', '__iter__']
iterator = iter(iterable)  # tem __iter__ e __next__
lista = [n for n in range(1000000)]
generator = (n for n in range(1000000))

print(sys.getsizeof(lista))
print(sys.getsizeof(generator))

print(generator)

# for n in generator:
#     print(n)