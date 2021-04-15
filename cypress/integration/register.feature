Feature: Register
    Background: User on Register Page

    Scenario: Successful Register
        Given correct credentials
        When registering
        Then the user should be connected
        And the user should be redirected to his shopping cart

    Scenario: Email Already in Use
        Given correct credentials
        But the email is already in use
        When registering
        Then an error "email already in use" should appear
        And the user can't register

Scenario: Wrong Email
        Given correct credentials
        But an invalid email
        When registering
        Then an error "email invalid" should appear
        And the user can't register

Scenario: No First Name
        Given correct credentials
        But no first name
        When registering
        Then an error "please fill out this field" should appear
        And the user can't register

Scenario: No Last Name
        Given correct credentials
        But no last name
        When registering
        Then an error "please fill out this field" should appear
        And the user can't register
    
Scenario Outline: Wrong Password
        Given correct credentials
        But the password hasn't "<condition>"
        When registering
        Then an error "please type a correct password" should appear
        And the user can't register

    Example: <condition>
    | 8 characters |
    | 1 lower case |
    | 1 upper case |
    | 1 number     |