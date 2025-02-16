import test from "../pageObjects/login"


describe('Login to Retail Billing and edit customer detail', () => {
  it('login', () => {
    test.login('/')
    cy.get('[class="sc-jgbSNz gyZfRc"]').should('contain.text', 'SELECT OPTION')

  })
})