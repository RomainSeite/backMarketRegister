Feature: Register
    Background: 
        Given a user on register page
        And correct email, first&last name, password

Scenario: Successful Register
        When registering
        Then the user should be redirected

Scenario: Email Already in Use
        Given the email is already in use
        When registering
        Then an email error should appear
        And the register shouldn't work

Scenario: Wrong Email
        Given an invalid email
        When registering
        Then an email error should appear
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
    
Scenario Outline: Wrong Password
        Given the password doesn't have "<condition>"
        When registering
        Then a password error should appear
        And the register shouldn't work

    Example: <condition>
    | 8 characters |
    | 1 lower case |
    | 1 upper case |
    | 1 number     |