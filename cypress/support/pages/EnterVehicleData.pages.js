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

Cypress.Commands.add('entrarAutomovel', () => {
    cy.get(ENTRAR_AUTO).click()
})

Cypress.Commands.add('primeiroForm', () => {
    cy.get(INPUT_MAKE).select('Audi').click
    cy.get(INPUT_ENGINE).type('100')
    cy.get(INPUT_DATE).type('01/15/2025')
    cy.get(INPUT_NUMBEROF).select('5').click
    cy.get(INPUT_FUEL).select('Gas').click
    cy.get(INPUT_LISTPRINCE).type('10000')
    cy.get(INPUT_LICENSE).type('8547')
    cy.get(INPUT_ANNUAL).type('100')
    cy.get(BTN_NEXT).click()
})


