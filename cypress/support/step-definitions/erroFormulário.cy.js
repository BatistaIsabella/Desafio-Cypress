Given('que acesso o portal Tricentis', () => {
    cy.visit('/app.php')
})

When('acesso a aba de automovel', () => {
    cy.entrarAutomovel()
})

And('preencho as informacoes do form 1 com uma informação errada', () => {
    cy.erroPrimeiroForm()
})

Then('recebe uma mensagem de erro', () => {})