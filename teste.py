# def soma(a, b):
#     print(a + b)
#     return a, b

# soma(4, 3)

def mult(*args):
    conta = 0
    for numero in args:
        conta = numero * numero
    return conta

mult(1, 1)
print(mult)