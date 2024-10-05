const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
//const { expect } = require('chai');

Given('I access Flipkart URL', () => {
  cy.visit('https://www.flipkart.com');
});

When('I am on Flipkart home page', () => {
  cy.title().should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
});

Then('Verify the Flipkart image present or not', () => {
  cy.get('img[title="Flipkart"]').should('be.visible');
});
