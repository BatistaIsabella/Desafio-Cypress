# utf -8
# language: pt

Funcionalidade: teste Formulario no portal
    Cenário: Não Validar Login Portal
        Dado que acesso o portal Tricentis
        Quando acesso a aba de automovel
        E preencho as informacoes do form 1 com uma informação errada
        Então recebe uma mensagem de erro

        