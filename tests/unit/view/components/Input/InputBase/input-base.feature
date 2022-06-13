Feature: Input Base

  Scenario: updating value property correctly
    When mount input component
    Then compare the value property
    Then check if it didn't call onBlur event

  Scenario: snapshot component
    When to mount the component
    Then render perfectly

  Scenario: updating name properties correctly
    When to mount the component
    Then compare the name property

  Scenario: verify change state and setState
    Given component assembled with state change on screen
    When typing something in the field
    Then check the number of times called
    Then the text on the screen should change
