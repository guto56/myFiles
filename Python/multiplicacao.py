# def soma(a, b):
#     print(a + b)
#     return a, b
# soma(4, 3)

def mult(*args):
    conta = 1
    for numero in args:
        conta *= numero
    return conta

numero_um_usuario = int(input('Numero 1: '))
numero_dois_usuario = int(input('Numero 2: '))
multiplicacao = mult(numero_um_usuario, numero_dois_usuario)
print(multiplicacao)