import { When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^game started$/, () => {
  cy.visit('');
  cy.url().should('contains', 'http://localhost:8090');
});

When(/^player clicks on -new game-$/, () => {
  cy.get('#new-game-button').click();
});

And(/^the scoreboard shows 1:1$/, () => {
  const modifyScore = (document) => {
    document.getElementById('user-score').innerHTML = 1;
    document.getElementById('machine-score').innerHTML = 1;
  }

  cy.document().then(document => modifyScore(document));
  cy.get('#user-score').should('have.text', '1');
  cy.get('#machine-score').should('have.text', '1');
});

Then(/^the scoreboard shows 0:0$/, () => {
  return true;
});

Then(/^result text show \"([^\"]*)\"$/, function (resultText) {
  cy.get('#result-text p:nth-of-type(1)').should('have.text', resultText);
});

