describe('On init page', function () {
  it('loads the aplication', function () {
    cy.visit('index.html');
  });

  it('shows score 0:0', function () {
    cy.get('#user-score').should('have.text', '0');
    cy.get('#machine-score').should('have.text', '0');
  });

  it('display the init text "Select your choice to start the game"', function () {
    cy.get('#result-text p').should('have.text', 'Select your choice to start the game');
  })
})
