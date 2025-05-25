@datepicker @ui @regression
Feature: Date Picker
  As a user
  I want to be able to select dates
  So that I can input date information

  Scenario: Selecting a random future date
    Given I am on the "date picker" page
    When I select a random future date
    Then the selected date should be displayed in the correct format 