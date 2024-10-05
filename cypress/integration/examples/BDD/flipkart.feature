Feature: Flipkart URL and image check

  application Regression
  @Regression
  Scenario: Flipkart URL site check
    Given I access Flipkart URL
    When I am on Flipkart home page
    Then Verify the Flipkart image present or not