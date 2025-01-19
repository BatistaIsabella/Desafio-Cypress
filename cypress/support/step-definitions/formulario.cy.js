Given('que o usuario acessa o portal Tricentis', () => {
    cy.visit('/app.php')
})

When('o usuario acessa a aba de automovel', () => {
    cy.entrarAutomovel()
})

And('o usuario preenche as informacoes do form 1', () => {
    cy.primeiroForm()
})

And('o usuario preenche as informacoes do form 2', () => {
    cy.segundoForm()
})

And('o usuario preenche as informacoes do form 3', () => {
    cy.terceiroForm()
})

And('o usuario preenche as informacoes do form 4', () => {
    cy.quartoForm()
})

And('o usuario preenche as informacoes do form 5', () => {
    cy.quintoForm()
})

Then('o usuario recebe uma mensagem de envio concluido', () => {
    cy.validarMensagemEnvio()
})

And('o usuario confirma o envio do formulario', () => {
    cy.confirmaEnvio()
})
