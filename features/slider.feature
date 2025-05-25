@slider @ui @regression
Feature: Slider
  As a user
  I want to be able to adjust a slider
  So that I can select values within a range

  Scenario: Moving the slider to a random value
    Given I am on the "slider" page
    When I move the slider to a random value
    Then the slider value should be within the expected range 