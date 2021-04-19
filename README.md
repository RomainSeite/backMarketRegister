# backMarketRegister

Cypress end-to-end test project about registering on [preprod.backmarket.fr](https://preprod.backmarket.fr/register) using the register page. [preprod.backmarket.fr/register](preprod.backmarket.fr/register)

Author: Romain SEITE

Tools used : Github, Cypress, Git, VSC, Chrome

## Index

* [**Scenarios**](cypress/integration/register.feature) : register test scenarios in Gherkin. They are found in cypress/integration

* [**E2E tests**](cypress/integration/register.spec.js) : automated register tests in Javascript. They are found in cypress/integration

* [**Video**](#Video) : video of the tests automated with Cypress. They are found in cypress/videos in both .mp4 and .gif

* [**Screenshots**](#Screenshots) : screenshots of the dashboard and of the report of the 6 tests E2E. They are found in cypress/screenshots

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

### Scenarios :

**Feature: Register**

  As a user on register page with correct email, first&last name, password
  I want to register
  So I can start using the site for shopping

  Acceptance conditions:
    -I am asked a valid e-mail
    -I am asked a password with at least 8 characters, 1 uppercase, 1 lowercase, 1 number
    -Otherwise I can't register and I stay at the same page
    
**Background:**
        Given a user on register page
        Given correct email, first&last name, password
    
**Scenario: Successful Register**

        When registering
        
        Then the user should be redirected
        
**Scenario: Email Already in Use**

        Given the email is already in use
        
        When registering
        
        Then an error email already in use should appear
        
        And the register shouldn't work

**Scenario: Wrong Email**

        Given an invalid email
        
        When registering
        
        Then an error email invalid should appear
        
        And the register shouldn't work

**Scenario: No First Name**

        Given no first name
        
        When registering
        
        Then a first name error should appear
        
        And the register shouldn't work

**Scenario: No Last Name**

        Given no last name
        
        When registering
        
        Then a last name error should appear
        
        And the register shouldn't work
    
**Scenario Outline: Password has "<condition>"**

        Given the password has "<condition>"
        
        When registering
        
        Then a password error should appear
        
        And the register shouldn't work

   **Examples**: 
| **condition**  |
| :--------------|
| not8Characters |
| noLowerCase    |
| noUpperCase    |
| noNumber       |

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

### Video

Video of the tests :

![Video](cypress/videos/register.spec.js.gif)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

### Screenshots

**Dashboard** :
![dashboard](cypress/screenshots/dashboardBackMarketRegistration.png)
You can see I started with 1 test and waited it to work fine before writing all tests

**Report** :
![**report**](cypress/screenshots/reportBlackMarketregister.png)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
