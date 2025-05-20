@draganddrop @ui @regression
Feature: Drag and Drop
  As a user
  I want to be able to drag and drop elements
  So that I can rearrange content on the page

  Scenario: Dragging an element to a drop target
    Given I am on the "drag and drop" page
    When I drag the element to the drop target
    Then the element should be dropped successfully 