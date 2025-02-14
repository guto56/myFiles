nome = input("Digite seu nome: ")
if ' ' in nome:
    print('O nome não pode conter espaço.')
    exit()

idade = input('Digite sua idade: ')
intIdade = int(idade)
if intIdade < 18:
    print('Infelizmente, menor de idade não é permitido.')

cargo = int(input('Digite o número correspondente ao seu cargo: [1]Contador [2]Gerente T.I [3]Outro: '))
if cargo == 1:
    tempo = input('A quanto tempo você trabalha como Contador? ')
if cargo == 2:
    tempo = input('A quanto tempo você trabalha como Gerente de TI? ')
if cargo == 3:
    outroCargo = input('Qual cargo você trabalha ou deseja trabalhar? ')
    cargoDef = int(input(f'Você já trabalha nesse cargo ou quer trabalhar como {outroCargo}? [1]Já trabalho | [2]Quero trabalhar com o cargo mencionado. R: '))
    if cargoDef == 1:
        tempo = int(input(f'A quanto tempo você trabalha como {outroCargo}? Responda somente com números, em anos. R: '))
        if tempo > 3:
            print('Ótimo! Você já possui o tempo de experiência mínimo para se cadastrar.')
        elif tempo <= 2:
            print('Ah, infelizmente você não possui o tempo necessário para ter uma boa experiência.')
    if cargoDef == 2:
        motivo = input(f'Porque você deseja trabalhar como {outroCargo}?')
        
print('Sua inscrição foi realizada como: ')
print(nome)
print(f'Seu nome tem {len(nome)} letras.')
print(f'Primeira letra de seu nome: {nome[0]}')
print(f'Última letra: {nome[-1]}.')
