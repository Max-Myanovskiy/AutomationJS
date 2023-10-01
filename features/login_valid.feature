Feature: Login with valid credentials
    @login
    Scenario Outline: As a user, I try to log in with valid username and password
        Given User is located on the main page of saucedemo website
        When User enter username "<username>" and password "<password>"
        And User click “Login” button
        Then User is redirected to the inventory page

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |
            | problem_user  | secret_sauce |