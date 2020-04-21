import startNewGame from '../../../src/js/controllers/startNewGame';

describe('When new game is started', () => {
  beforeAll(() => {
    window.resultTextInitialMessage = 'select option';
    window.userScore = 4;
    window.computerScore = 3;

    document.body.innerHTML = `
    <div class="score-board">
      <span id="user-score">4</span>
      <span>:</span>
      <span id="machine-score">3</span>
    </div>
    <div id="result-text">
      <p>rock - paper</p>
      <p>you lose</p>
    </div>`;

    startNewGame();
  });
  test('score is 0:0', () => {
    const testUserScore = document.getElementById('user-score').textContent;
    const testComputerScore = document.getElementById('machine-score').textContent;

    expect(testUserScore).toBe('0');
    expect(testComputerScore).toBe('0');
  });
  test('options chosen text is restarted', () => {
    const optionChosenText = document.querySelector('#result-text p').textContent;

    expect(optionChosenText).toBe('select option');
  });
  test('result text is empty', () => {
    const resultText = document.querySelector('#result-text p:nth-of-type(2)').textContent;

    expect(resultText).toBe('');
  });
});
