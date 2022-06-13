Feature: Signin

  Scenario: Valid helper label
    Given visit sigin page
    When click submit button
    Then show errors with helper label

  Scenario: Trigger icon password
    When trigger mousedown icon password
    Then change the password field icon

  Scenario: Invalid helper label
    When click submit button with everything filled
    Then it shouldn't show errors

  Scenario: Login success
    When click submit button to login
    Then checks if the page is from the logged in profile
