Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

# Feature: Invalid Login

#     Scenario: Login with empty Username and Password fields
#         Given User is located on the main page of saucedemo website
#         When User click “Login” button
#         Then User should see “Epic sadface: Username is required” error message