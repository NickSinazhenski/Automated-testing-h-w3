@ui @tooltips @smoke
Feature: Tool Tips

  @button @tooltip
  Scenario: Check text on Button tooltip
    Given I am on the tool tips page
    When I hover over the element with selector "#toolTipButton"
    Then I should see the tooltip text "You hovered over the Button"

  @textfield @tooltip
  Scenario: Check text on Text Field tooltip
    Given I am on the tool tips page
    When I hover over the element with selector "#toolTipTextField"
    Then I should see the tooltip text "You hovered over the text field"
  @link @tooltip
  Scenario: Check text on Contrary tooltip
    Given I am on the tool tips page
    When I hover over the element with text "Contrary"
    Then I should see the tooltip text "You hovered over the Contrary"

  @link @tooltip
  Scenario: Check text on Section tooltip
    Given I am on the tool tips page
    When I hover over the element with text "1.10.32"
    Then I should see the tooltip text "You hovered over the 1.10.32"
