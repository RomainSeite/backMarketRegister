import { user } from "../../assets/user";
import { error } from "../../assets/error";
import { When, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
const  FIRST_NAME = 1,
       LAST_NAME  = 2,
       PASSWORD   = 3;
let scenarioCounter = 0;

  /* * Shared Scenario Steps* * * * * */  
    Given("a user on register page", () => {
      cy.visit('https://preprod.backmarket.fr/register')
    })

    And("correct email, first&last name, password", () => {
      if (!(scenarioCounter++)) cy.wait(6000)
      cy.get("#email-signup").type(user.email)
      cy.get("#firstName-signup").type(user.firstName)
      cy.get("#lastName-signup").type(user.lastName)
      cy.get("#password-signup").type(user.password)
    })
  
    When("registering", () => {
      cy.get('[data-test=signup-submit-button').as("signuptButton").click()
    })

    And("the register shouldn't work", () => {
      cy.url().should("eq", "https://preprod.backmarket.fr/register")
    })
  /* * Shared Scenario Steps* * * * * */  

  
  /* * Scenarios * * * * * * * * * * * * * * * * */  
  /* Scenario Successful Register * * * * */
    //Given a user on register page
    //And correct email, first&last name, password
    //When registering
    Then("the user should be redirected", () => {
      cy.url().should("eq", "https://preprod.backmarket.fr/dashboard/orders")
    })


  /* Scenario Email Already in Use * * * * * */
    //Given a user on register page
    //And correct first&last name, password
    Given("the email is already in use", () => {
      cy.get("#email-signup").clear().type("seite.romain@gmail.com")
    })
    //When registering
    Then("an error email already in use should appear", () => {
      cy.get("[data-test=list-item]").should("contain.text", error.email.alreadyInUse)
    })
    //And the register shouldn't work


  /* Scenario Wrong Email */
    Given("an invalid email", () => {
      cy.get("#email-signup").clear().type("a@a.a")
    })
    //When registering
    Then("an error email invalid should appear", () => {
      cy.get("[data-test=list-item]").should("contain.text", error.email.invalid)
    })
    //And the register shouldn't work


  /* Scenario No First Name */
    Given("no first name", () => {
      cy.get("#firstName-signup").clear()
    })
    //When registering
    Then("a first name error should appear", () => {
      cy.get(`:nth-child(${FIRST_NAME}`).should("contain.text", error.firstName)
    })
    //And the register shouldn't work

  
  /* Scenario No Last Name */
    Given("no last name", () => {
      cy.get("#lastName-signup").clear()
    })
    //When registering
    Then("a last name error should appear", () => {
      cy.get(`:nth-child(${LAST_NAME}`).should("contain.text", error.lastName)
    })
    //And the register shouldn't work

    
  /* Scenario Wrong Password */
    Given("the password has {string}", (condition) => {
      cy.get("#password-signup").clear().type(user[condition])
    })
    //When registering
    Then("a password error should appear", () => {
      cy.get(`:nth-child(${PASSWORD}`).should("contain.text", error.password.invalid)
    })
    //And the register shouldn't work
  /* * Scenarios * */  