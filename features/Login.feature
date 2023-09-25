Feature: Invalid Login

    Scenario: Login with empty Username and Password fields

        Given User is located on the main page of saucedemo website
        When User click “Login” button
        Then User should see “Epic sadface: Username is required” error message