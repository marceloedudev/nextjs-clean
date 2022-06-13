Feature: SignIn Input

  Scenario: render input with type email
    Given mount email input
    When get id input
    Then showing input type email
