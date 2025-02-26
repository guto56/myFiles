while True:
    num1 = input('Digite o primeiro número: ')
    num2 = input('Digite o segundo número: ')
    opc = input('Escolha uma operação [+] [-] [/] [*] : ')

    numeros_validos = None

    try:
        num1_float = float(num1)
        num2_float = float(num2)
        numeros_validos = True
    except:
        numeros_validos = None

    if numeros_validos is None:
        print('Um dos números é inválido.')
        continue

    operadores_permitidos = '+-/*'

    if opc not in operadores_permitidos:
        print('Operador Inválido.')
        continue

    if len(opc) > 1:
        print('Digite apenas um operador.')
        continue

    if opc == '+':
        soma = num1_float + num2_float
        print(soma)
    elif opc == '-':
        subt = num1_float - num2_float
        print(subt)
    elif opc == '/':
        div = num1_float / num2_float
        print(div)
    elif opc == '*':
        mult = num1_float * num2_float
        print(mult)
    else:
        print('Opção Inválida.')

    sair = input('Deseja sair? [s]: ').lower().startswith('s')
    print(sair)

    if sair == True:
        break