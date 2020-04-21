import computer from '../../../src/js/lib/computer.js';

describe('On init', function () {
  it('score shows 2:0', function () {
    cy.visit('index.html');

    const modifyUserScore = (doc) => doc.getElementById('user-score').innerHTML = 2;

    cy.document().then(doc => modifyUserScore(doc));

    cy.get('#user-score').should('have.text', '2');
    cy.get('#machine-score').should('have.text', '0');
  })
});

describe('When machine selects rock', function () {
  before(() => {
    cy.visit('index.html', {
      onLoad: (window) => {
        // cy.stub(window.computer, 'computerChoice').returns('rock');
        window.computer.computerChoice = () => 'rock';
      }
    })
  });

  describe('and user selects rock', function () {
    it('the options text is ROCK-ROCK', () => {
      cy.get('#rock').click();

      cy.get('#result-text  p:nth-of-type(1)').should('have.text', 'ROCK - ROCK');

    })
    it('the result text is "Draw"', function () {
      cy.get('#result-text  p:nth-of-type(2)').should('have.text', 'DRAW ~.~');
    });
  });

  describe('and the user selects paper', () => {
    it('the options text is PAPER - ROCK', () => {
      cy.get('#paper').click();

      cy.get('#result-text  p:nth-of-type(1)').should('have.text', 'PAPER - ROCK');

    })
    it('the result text is "You win"', function () {
      cy.get('#result-text  p:nth-of-type(2)').should('have.text', 'YOU WIN :)');
    });

  })
})
