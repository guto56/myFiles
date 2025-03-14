made by Augusto Luiz Nunes Corso

// importar:
git remote add origin https://github.com/guto56/myFiles

// Site tio Lucas
// Site Teteu

// Curso: Breves Noções Sobre o Agronegócio.
https://universidadeamaggi.com.br/lms/#/home

// Correr atras de certificados

// Valkaz Store New Management and Site:

Orçamento Previsto: R$500,00

Custo Domínio Personalizado: R$40,00 /ano
Custo para Site Aberto NuvemShop: R$59,00 /mês

Custo Caixa Principal: R$33,00 para 20unidades
Custo Camiseta: R$45,00 /unidade

Soma: Aproximadamente R$482,00
Lucro: Aproximadamente R$731,00

// Como fazer Pré Venda?

// Chip NFC:
Como Fazer:
NFC Passivos.
Aplicativo "NFC Tools" para gravar algo.

Criar uma experiência interativa para clientes. Por exemplo, ao aproximar o celular, ele pode ser redirecionado para um link com um desconto exclusivo ou informações sobre a peça de roupa.
Aumentar seu engajamento nas redes sociais ou criar promoções.
Personalização: Oferecer experiências personalizadas, como acesso a conteúdo exclusivo ou promoções.

// Site Certificado:
Pesquisas de usuarios cadastrados e os certificados que ele tem em upload.

hoje aprendi a fazer o sistema identificar se tô codando em
Unix (Linux/Mac) ou em Nt (Windows), e é MUITO simples, tem
apenas 5 linhas de código, e nenhuma linha é muito grande, é
literalmente isso aqui:

import os (essa linha importa o módulo do sistema, pra poder mexer no que quiser)

if os.name == 'nt':
    executa algo
elif os.name == 'posix':
    executa outra coisa

* (os) chama o módulo importado
* (name) é um parâmetro que estou indicando que o módulo busque
* (==) define o valor do parâmetro
* (if o que acabou de ser verificado) faz algo
* (elif (define o contrário)) elif podia ser apenas: else: ação
* else: executar outra coisa, mas usei o elif para você entender melhor
* se fosse usar o else seria:

if os.name == 'nt':
    executa algo
else:
    executar outra coisa

* porque usar dois iguais (==) ?
    usar dois iguais compara se algo é algo
    se usar apenas um igual (=) você estará definindo o valor de algo, como:
    nome = 'lucas'