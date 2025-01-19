const INPUT_DATE = '#startdate'
const SELECT_INSURANCE = '#insurancesum'
const SELECT_MERIT = '#meritrating'
const SELECT_DEMAGE = '#damageinsurance'
const SELECTION_OPTIONAL = 'label.ideal-radiocheck-label'
const SELECTION_COURTESY = '#courtesycar'
const BTN_NEXT = '#nextselectpriceoption'

Cypress.Commands.add('terceiroForm', () => {
    cy.get(INPUT_DATE).type('08/13/2025')
    cy.get(SELECT_INSURANCE).select('3.000.000,00').click
    cy.get(SELECT_MERIT).select('Super Bonus').click
    cy.get(SELECT_DEMAGE).select('Full Coverage').click
    cy.get(SELECTION_OPTIONAL).contains('Euro Protection').click()
    cy.get(SELECTION_COURTESY).select('Yes').click
    cy.get(BTN_NEXT).click()
})

