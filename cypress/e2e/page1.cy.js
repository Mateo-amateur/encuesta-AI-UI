import questions from '../../src/questions.json'

describe('Page 1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('can open page', () => {
    cy.contains('Información personal')
  })

  it('Insert name and last name and expect that it is not correct', () => {
    cy.get('input[name="name"]').type('Mateo Andrés')
    cy.get('input[name="last_name"]').type('Piana')
    cy.get('input[name="edge"]').type(17)
    cy.get('input[type="submit"]').click()
    cy.get('.error').contains('Este nombre y apellido están registrados')
  })

  it('Insert name and last name and expect that it is not correct', () => {
    cy.get('input[name="name"]').type('Mateo Andrés Domingo')
    cy.get('input[name="last_name"]').type('Piana')
    cy.get('input[name="edge"]').type(17)
    cy.get('input[type="submit"]').click()
    cy.get('.question p').contains(questions.questions[0].question)
  })
})