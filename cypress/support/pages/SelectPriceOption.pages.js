const SELECTION_OPTION = ':nth-child(4) > .ideal-radio'
const BTN_NEXT = '#nextsendquote'

Cypress.Commands.add('quartoForm', () => {
    cy.get(SELECTION_OPTION).click()
    cy.get(BTN_NEXT).click()
})

