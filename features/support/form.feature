Feature: Automation Practice Form

  Scenario: Successful form submission with valid data
    Given I open the form page
    When I fill the form with:
      | firstName | lastName | email              | gender | mobile     |
      | John      | Doe      | john.doe@mail.com  | 1      | 1234567890 |
    And I submit the form
    Then I should see the submission modal with:
      | firstName | lastName | email              | gender | mobile     |
      | John      | Doe      | john.doe@mail.com  | 1      | 1234567890 |
