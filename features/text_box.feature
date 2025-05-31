@ui @textbox @smoke
Feature: Text Box Form
  As a user
  I want to be able to fill out a text box form
  So that I can submit my information

  Scenario: User fills out the text box with random information
    Given the user navigates to the text box form
    When the user inputs randomly generated form data
    And submits the completed form
    Then the form output should match the entered values