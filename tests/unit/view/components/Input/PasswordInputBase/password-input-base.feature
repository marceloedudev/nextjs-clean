Feature: Password Input Base

  Scenario: change the button icon
    Given mount password input
    When click password icon
    Then showing input type text

  Scenario: verify input type
    Given mount password input
    When change mouse down
    Then showing input type text
