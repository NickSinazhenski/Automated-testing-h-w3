@ui @select @regression
Feature: Interacting with Select Menus on the DemoQA page

  Scenario: Choosing different options from all dropdown menus
    Given I open the select menu webpage

    When I pick "Group 2, option 1" from the "Select Value" dropdown
    And I choose "Other" from the "Select One" dropdown
    And I select "Green" in the old-style dropdown menu
    And I pick multiple colors: "Black" and "Blue"

    Then the selected colors should include "Black" and "Blue"
