@ui @textbox @regression
Feature: Filling out the text box form

  Scenario: User fills out the text box with random information
    Given the user navigates to the text box form
    When the user inputs randomly generated form data
    And submits the completed form
    Then the form output should match the entered values