nome = "Augusto"
altura = 1.63
peso = 51
imc = peso / (altura * altura)

linha_1 = f'{nome} tem {altura} de altura,'
linha_2 = f'com {peso} de peso e com IMC de:'
linha_3 = f'{imc:.2f}'

print(linha_1)
print(linha_2)
print(linha_3)