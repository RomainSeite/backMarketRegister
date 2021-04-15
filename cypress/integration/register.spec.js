/// <reference types="cypress" />
let email = 'f@english.fr';

context('User on Register Page', () => {
    beforeEach(() => {
      cy.visit('https://preprod.backmarket.fr/register')
      cy.wait(1111)
    })
  
    it('Successful Register', () => {
      cy.get('[id="email-signup"').type(email)
      cy.get('[id="firstName-signup"').type("Romain")
      cy.get('[id="lastName-signup"').type("Romain")
      cy.get('input[id="password-signup"').type("Romainromain1")
      cy.get('[data-test="signup-submit-button"').should("not.have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
      cy.get('[data-test="signup-submit-button"').click()
      cy.url().should("eq", "https://preprod.backmarket.fr/dashboard/orders")
    })

    it('Email Already in Use', () => {
        cy.get('[id="email-signup"').type("seite.romain@gmail.com")
        cy.get('[id="firstName-signup"').type("Romain")
        cy.get('[id="lastName-signup"').type("Romain")
        cy.get('input[id="password-signup"').type("Romainromain1")
        cy.get('[data-test="signup-submit-button"').click()
        cy.wait(100)
        cy.get('[data-test="signup-submit-button"').should("have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
      })

      it('Wrong Email', () => {
        cy.get('[id="email-signup"').type("a@a.a")
        cy.get('[id="firstName-signup"').type("Romain")
        cy.get('[id="lastName-signup"').type("Romain")
        cy.get('input[id="password-signup"').type("Romainromain1")
        cy.get('[data-test="signup-submit-button"').click()
        cy.wait(100)
        cy.get('[data-test="signup-submit-button"').should("have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
      })

      it('No First Name', () => {
        cy.get('[id="email-signup"').type(email)
        cy.get('[id="firstName-signup"').type(" ")
        cy.get('[id="lastName-signup"').type("Romain")
        cy.get('input[id="password-signup"').type("Romainromain1")
        cy.get('[data-test="signup-submit-button"').click()
        cy.wait(100)
        cy.get('[data-test="signup-submit-button"').should("have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
      })

      it('No Last Name', () => {
        cy.get('[id="email-signup"').type(email)
        cy.get('[id="firstName-signup"').type("Romain")
        cy.get('[id="lastName-signup"').type(" ")
        cy.get('input[id="password-signup"').type("Romainromain1")
        cy.get('[data-test="signup-submit-button"').click()
        cy.wait(100)
        cy.get('[data-test="signup-submit-button"').should("have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
      })

      it('Wrong Password', () => {
        cy.get('[id="email-signup"').type(email)
        cy.get('[id="firstName-signup"').type("Romain")
        cy.get('[id="lastName-signup"').type("Romain")
        //no upper case
        cy.get('input[id="password-signup"').type("adadadadadadad11313")
        cy.get('[data-test="signup-submit-button"').click()
        cy.wait(100)
        cy.get('[data-test="signup-submit-button"').should("have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
        //no lowercase
        cy.get('input[id="password-signup"').clear().type("ADAFAFA11313")
        cy.get('[data-test="signup-submit-button"').click()
        cy.wait(100)
        cy.get('[data-test="signup-submit-button"').should("have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
        //no number
        cy.get('input[id="password-signup"').clear().type("ADAFAFAdadadad")
        cy.get('[data-test="signup-submit-button"').click()
        cy.wait(100)
        cy.get('[data-test="signup-submit-button"').should("have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
        //no 8 characters
        cy.get('input[id="password-signup"').clear().type("aaAA111")
        cy.get('[data-test="signup-submit-button"').click()
        cy.wait(100)
        cy.get('[data-test="signup-submit-button"').should("have.class","_11htsyZzEtsWHjuL552rT7 _1BSnq0bsVHu9nh0ahWxTMW mDZidCMMNo4tat_evYGU9")
       
        })
})