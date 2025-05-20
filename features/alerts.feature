Feature: Interaction with various types of alerts

  Scenario: Display and accept a standard alert
    Given the user navigates to the Alerts section
    When they trigger a simple alert popup
    Then an alert appears with text "You clicked a button"

  Scenario: Cancel a confirmation alert
    Given the user navigates to the Alerts section
    When they activate the confirm alert and press Cancel
    Then the result area shows "You selected Cancel"

  Scenario: Accept a confirmation alert
    Given the user navigates to the Alerts section
    When they activate the confirm alert and press OK
    Then the result area shows "You selected Ok"

  Scenario: Enter text into a prompt alert
    Given the user navigates to the Alerts section
    When the prompt alert is shown and they input "Playwright"
    Then the page displays prompt result containing "You entered Playwright"

  Scenario: Handle a timed alert
    Given the user navigates to the Alerts section
    When they click the delayed alert button and accept it
    Then an alert appears with text "This alert appeared after 5 seconds"
