@checkbox @ui @regression
Feature: Checkbox Selection
  As a user,
  I want to be able to select checkboxes
  So that I can choose multiple options

  Background:
    Given I am on the "checkbox" page
    And I expand all checkboxes

  Scenario: Selecting a random checkbox
    When I select a random checkbox
    Then the selected checkbox should be checked

  Scenario Outline: Selecting a specific checkbox
    When I select the "<checkbox>" checkbox
    Then the "<checkbox>" checkbox should be checked

    Examples:
      | checkbox   |
      | Desktop    |
      | Documents  |
      | Downloads  |
      | Office     |
      | WorkSpace  |