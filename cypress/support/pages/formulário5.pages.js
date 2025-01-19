const INPUT_EMAIL = '#email'
const INPUT_USER_NAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND = '#sendemail'

Cypress.Commands.add('quintoForm', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(INPUT_USER_NAME).type(Cypress.env('username'))
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('password'))
    cy.get(BTN_SEND).click()
})

