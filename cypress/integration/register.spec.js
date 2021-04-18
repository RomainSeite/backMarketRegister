/// <reference types="cypress" />
import { user } from "../../assets/user";
import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";

describe('Register', () => {
  Given("a user on register page", () => {
    cy.clearCookies()
    cy.visit('https://preprod.backmarket.fr/register')
    cy.wait(1111)
  })

  And("correct email, first&last name, password", () => {
    cy.get("#email-signup").type(user.email)
    cy.get("#firstName-signup").type(user.firstName)
    cy.get("#lastName-signup").type(user.lastName)
    cy.get("#password-signup").type(user.password)
  })
  
  When("registering", () => {
    cy.get("[data-test=signup-submit-button]").click()
  })


  specify('Successful Register', () => {
    //Given a user on register page
    //And correct email, first&last name, password
    //When registering
    Then("the user should be redirected", () => {
      cy.url().should("eq", "https://preprod.backmarket.fr/dashboard/orders")
    })
  })

  specify('Email Already in Use', () => {
    //Given a user on register page
    //And correct first&last name, password
    Given("the email is already in use", () => {
      cy.get("#email-signup").type("seite.romain@gmail.com")
    })
    Then("an email error should appear", () => {

      })
        And the register shouldn't work

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