from dados import produtos
from dados import __init__
import copy

novos_produtos = [
    {**p, 'preco': round(p['preco'] * 1.1, 2)}
    for p in copy.deepcopy(produtos)
]

produtos_ordem_crescente =sorted(
    copy.deepcopy(produtos),
    key=lambda p:p['nome']
           )

produtos_ordem_decrescente = sorted(
    copy.deepcopy(produtos),
    key=lambda p:p['nome'], reverse=True
    )

print(*produtos_ordem_crescente, sep='\n')
print()
print(*produtos_ordem_decrescente, sep='\n')

# print(*produtos, sep='\n')
# print()
# print(*novos_produtos, sep='\n')