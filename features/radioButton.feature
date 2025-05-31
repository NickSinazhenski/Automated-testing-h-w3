@ui @radio @regression
Feature: Radio Button Selection
  As a user
  I want to be able to select radio buttons
  So that I can choose a single option from a group

  Scenario: Selecting a radio button
    Given I am on the radio button page
    When I select the "Yes" radio button
    Then I should see the result "You have selected Yes"

  Scenario: Selecting another radio button
    Given I am on the radio button page
    When I select the "Impressive" radio button
    Then I should see the result "You have selected Impressive" 