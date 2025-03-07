def par_impar(numero):
    numero_par_ou_impar = numero % 2 == 0

    if numero_par_ou_impar:
        return f'{numero} é par.'
    return f'{numero} é ímpar.'

numero_digitado = int(input('Digite um número: '))
numero = par_impar(numero_digitado)
print(numero)