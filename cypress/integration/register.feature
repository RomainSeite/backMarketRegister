Feature: register

  As a user on register page with correct email, first&last name, password
  I want to register
  So I can start using the site for shopping

  Acceptance conditions:
    -I am asked a valid e-mail
    -I am asked a password with at least 8 characters, 1 uppercase, 1 lowercase, 1 number
    -Otherwise I can't register and I stay at the same page

    
  Background: 
        Given a user on register page
        Given correct email, first&last name, password


  Scenario: [register] Successful Register
        When registering
        Then the user should be redirected

  Scenario: Email Already in Use
        Given the email is already in use
        When registering
        Then an error email already in use should appear
        And the register shouldn't work

  Scenario: Wrong Email
        Given an invalid email
        When registering
        Then an error email invalid should appear
        And the register shouldn't work

  Scenario: No First Name
        Given no first name
        When registering
        Then a first name error should appear
        And the register shouldn't work

  Scenario: No Last Name
        Given no last name
        When registering
        Then a last name error should appear
        And the register shouldn't work
    