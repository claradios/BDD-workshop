
describe('Update', () => {
  beforeEach(() => {
    window.userScore = 4;
    window.computerScore = 3;
    document.body.innerHTML = `
      <div class="score-board">
        <span id="user-score">0</span>
        <span>:</span>
        <span id="machine-score">0</span>
      </div>`;

  });

  test('user score', () => {
    const updateScore = require('../../../src/js/views/updateScore').default;
    const initUserScore = document.getElementById('user-score').textContent;
    expect(initUserScore).toBe('0');

    updateScore();

    const finalUserScore = document.getElementById('user-score').textContent;
    expect(finalUserScore).toBe('4');
  });

  test('computer score', () => {
    
    const updateScore = require('../../../src/js/views/updateScore').default;
    const initComputerScore = document.getElementById('machine-score').textContent;
    expect(initComputerScore).toBe('0');

    updateScore();

    const finalComputerScore = document.getElementById('machine-score').textContent;
    expect(finalComputerScore).toBe('3');

  });

})
