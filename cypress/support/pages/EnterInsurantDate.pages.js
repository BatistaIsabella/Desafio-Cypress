const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_DATE_BIRT = '#birthdate'
const INPUT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_CITY = '#city'
const INPUT_OCCUPATION = '#occupation'
const SELECT_HOBBIES = 'label.ideal-radiocheck-label'
const BTN_NEXT = '#nextenterproductdata'

Cypress.Commands.add('segundoForm', () => {
    cy.get(INPUT_FIRST_NAME).type('Aurora')
    cy.get(INPUT_LAST_NAME).type('Araujo')
    cy.get(INPUT_DATE_BIRT).type('07/22/2002')
    cy.get(INPUT_COUNTRY).select('Brazil').click
    cy.get(INPUT_ZIP_CODE).type(510889)
    cy.get(INPUT_CITY).type('Recife')
    cy.get(INPUT_OCCUPATION).select('Farmer').click
    cy.get(SELECT_HOBBIES).contains('Speeding').click()
    cy.get(BTN_NEXT).click()

})
