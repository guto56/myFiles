def executa(funcao, *args):
    return funcao(*args)

def soma(x, y):
    return x +y

def cria_multiplicador(multiplicador):
    def multiplica(numero):
        return numero * multiplicador
    return multiplica

print(executa(lambda x, y, z: sum(x, y, z), 12, 1, 2))