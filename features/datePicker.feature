@ui @datepicker @regression
Feature: Date Picker
  As a user
  I want to be able to select a date
  So that I can input dates in a user-friendly way

  Scenario: Selecting a future date
    Given I am on the "date picker" page
    When I select a future date
    Then the date should be updated in the input field 