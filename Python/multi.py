
# def soma(a, b):
#     print(a + b)
#     return a, b

# soma(4, 3)

def mult(*args):
    conta = 1
    for numero in args:
        conta *= numero
    return conta

multiplicacao = mult(1,2,3,4)
print(multiplicacao)

def par_impar(numero):
    multiplo_2 = numero % 2 == 0

    if multiplo_2:
        return f'{numero} é par'
    return f'{numero} é ímpar'


print(par_impar(2))
print(par_impar(3))
print(par_impar(4))
