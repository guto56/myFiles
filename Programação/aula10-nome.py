#12345678
#nome
#4321


nome = input("Qual seu nome? ")
idade = input('Digite sua idade: ')

if not nome or not idade:
    print('Você deixou algo vazio!')
else:
    print(f'Seu nome: {nome}.')
    print(f'Seu nome invertido é: {nome[::-1]}')

    if " " in nome:
        print(f'{nome} contém espaços.')
    else:
        print(f'{nome} não tem espaços.')

    print(f'Seu nome tem {len(nome)} letras.')

    print(f'A primeira letra do seu nome é: {nome[0]}')
    print(f'A última letra do seu nome é: {nome[-1]}')