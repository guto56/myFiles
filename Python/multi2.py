def criar_multiplicador(multiplicador):
    def multiplicar(numero):
        return numero * multiplicador
    return multiplicar
    
num1 = criar_multiplicador(2)

print(num1(4))