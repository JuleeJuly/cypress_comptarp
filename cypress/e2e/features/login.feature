Feature: Login
    Scenario: Verify login functionality
        Given I visit the login page
        When I enter valid credentials
        Then I should be redirected to the home page