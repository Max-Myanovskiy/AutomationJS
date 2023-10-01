Feature: Login Page

  Scenario Outline: As a user, I try to log in with empty username and password fields
    Given User is located on the main page of saucedemo website
    When User click “Login” button
    Then User should see "<message>" error message

    Examples:
      | username | password | message                            |
      |          |          | Epic sadface: Username is required |