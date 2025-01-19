const INPUT_EMAIL = '#email'
const INPUT_USER_NAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND = '#sendemail'
const MENSAGEM_EMAIL_ENVIADO = '.sweet-alert'
const CARREGAR = '#LoadingPDF'
const BNT_OK = '.confirm'



Cypress.Commands.add('quintoForm', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(INPUT_USER_NAME).type(Cypress.env('username'))
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('password'))
    cy.get(BTN_SEND).click()
})

Cypress.Commands.add('validarMensagemEnvio', () => {
    cy.get(CARREGAR).should('be.visible')
    cy.get(MENSAGEM_EMAIL_ENVIADO, { timeout: 10000 }).should('be.visible')
    cy.get(MENSAGEM_EMAIL_ENVIADO).contains('Sending e-mail success')
})

Cypress.Commands.add('confirmaEnvio', () => {
    cy.get(BNT_OK).click()
})
