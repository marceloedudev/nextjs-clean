Feature: SignIn Page

  Scenario: check display errors
    Given mount page components
    When change mouse down
    Then showing input type text

  Scenario: check render page
    When mount page components
    Then shows the page
