import { user } from "../../assets/user";
import { error } from "../../assets/error";
import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";

/*
As a user on register page with correct email, first&last name, password
  I want to register
  So I can start using the site for shopping

  Acceptance conditions:
    -I am asked a valid e-mail
    -I am asked a password with at least 8 characters, 1 uppercase, 1 lowercase, 1 number
    -Otherwise I can't register and I stay at the same page
*/

// Feature: Register


  /* * Shared Scenario Steps* */  
    Given("a user on register page", () => {
      cy.clearCookies()
      cy.visit('https://preprod.backmarket.fr/register')
      cy.wait(1111)
    });

    And("correct email, first&last name, password", () => {
      cy.get("#email-signup").type(user.email)
      cy.get("#firstName-signup").type(user.firstName)
      cy.get("#lastName-signup").type(user.lastName)
      cy.get("#password-signup").type(user.password)
    })
  
    When("registering", () => {
      cy.get("[data-test=signup-submit-button]").click()
    })

    And("the register shouldn't work", () => {
      cy.get('[type="checkbox"]').should("be", "unchecked")
      cy.url().should("eq", "https://preprod.backmarket.fr/register")
    })
  /* * Shared Scenario Steps* */  

  
  /* * Scenarios * */  
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
      cy.get("#email-signup").clear().type("seite.romain@gmail.com")
    })
    //When registering
    Then("an error email already in use should appear", () => {
      assert.isOk(cy.contain(error.email.alreadyInUse))
    })
    //And the register shouldn't work
  })


  specify("Wrong Email", () => {
    Given("an invalid email", () => {
      cy.get("#email-signup").clear().type("a@a.a")
    })
    //When registering
    Then("an error email invalid should appear", () => {
      assert.isOk(cy.contain(error.email.invalid))
    })
    //And the register shouldn't work
  })


  specify("No First Name", () => {
    Given("no first name", () => {
      cy.get("#firstName-signup").clear()
    })
    //When registering
    Then("a first name error should appear", () => {
      assert.isOk(cy.contain(error.firstName))
    })
    //And the register shouldn't work
  })

  
  specify("No Last Name", () => {
    Given("no last name", () => {
      cy.get("#lastName-signup").clear()
    })
    //When registering
    Then("a last name error should appear", () => {
      assert.isOk(cy.contain(error.lastName))
    })
    //And the register shouldn't work
  })


  specify("Wrong Password", () => {
    Given("the password doesn't have " + condition, (condition) => {
      cy.get("#password-signup").clear().type(condition)
    })
    //When registering
    Then("an error password invalid should appear", () => {
      assert.isOk(cy.contain(error.password.invalid))
    })
    //And the register shouldn't work
  })
  /* * Scenarios * */  