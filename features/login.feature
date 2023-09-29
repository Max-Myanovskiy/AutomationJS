Feature: Login Page

  Scenario Outline: As a user, I try to log in with empty username and password fields

    Given User is located on the main page of saucedemo website
    When User click “Login” button
    Then User should see “Epic sadface: Username is required” error message

# Examples:
#   | username | password             | message                        |
#   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#   | foobar   | barfoo               | Your username is invalid!      |