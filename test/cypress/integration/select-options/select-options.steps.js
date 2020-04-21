import { Given, When, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';

Given(/^game started$/, () => {
  cy.visit('');
  cy.url().should('contains', 'http://localhost:8090');
});

Given(/^computer select an option (.+)$/, computeroption => {
  cy.window().then((window) => {
    return window.computer.computerChoice = () => computeroption
  });
});

When(/^player selects an option (.+)$/, option => {
  cy.get(option).click();
});

Then(/^the result show the player option (.+)$/, optionresult => {
  cy.get('#result-text p:nth-of-type(1)').should('contains.text', `${optionresult} -`);
});

Then(/^the result show the options selected (.+)$/, result => {
  cy.get('#result-text p:nth-of-type(1)').should('have.text', result);
});

Then(/^the result game is (.+)$/, resultgame => {
  cy.get('#result-text p:nth-of-type(2)').should('have.text', resultgame)
});
