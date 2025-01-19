const ENTRAR_AUTO = '#nav_automobile'
const INPUT_MAKE = '#make'
const INPUT_ENGINE = '#engineperformance'
const INPUT_DATE = '#opendateofmanufacturecalender'
const INPUT_NUMBEROF = '#numberofseats'
const INPUT_FUEL = '#fuel'
const INPUT_LISTPRINCE = '#listprice'
const INPUT_LICENSE = '#licenseplatenumber'
const INPUT_ANNUAL = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'
const MENSAGEM_ERRO = '.invalid > .error'


Cypress.Commands.add('entrarAutomovel', () => {
    cy.get(ENTRAR_AUTO).click()
})

Cypress.Commands.add('erroPrimeiroForm', () => {
    cy.get(INPUT_MAKE).select('Audi').click
    cy.get(INPUT_ENGINE).type('100')
    cy.get(INPUT_DATE).type('01/15/2025')
    cy.get(INPUT_NUMBEROF).select('5').click
    cy.get(INPUT_FUEL).select('Gas').click
    cy.get(INPUT_LISTPRINCE).type('10000')
    cy.get(INPUT_LICENSE).type('8547000000000000')
    cy.get(MENSAGEM_ERRO).should('contain', 'Must be under 10 characters');
    
})
