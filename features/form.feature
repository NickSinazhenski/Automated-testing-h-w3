@ui @form @smoke
Feature: Automation Practice Form
  
  @regression
  Scenario: Successful form submission with valid data
    Given I open the form page
    When I fill the form with:
      | firstName | lastName       | email                    | gender | mobile     |
      | Palina    | Dolbik         | palina.dolbik@mail.com   | 1      | 9876543210 |
    And I submit the form
    Then I should see the submission modal with:
      | firstName | lastName       | email                    | gender | mobile     |
      | Palina    | Dolbik         | palina.dolbik@mail.com   | 1      | 9876543210 |
