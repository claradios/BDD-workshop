import { clearScore } from '../lib/options.js';
import { changeTextFirstRow, changeTextSecondRow } from '../views/resultText.js';
import updateScore from '../views/updateScore.js';

const startNewGame = () => {
  clearScore();
  changeTextFirstRow(window.resultTextInitialMessage);
  changeTextSecondRow('');
  updateScore();
  console.log('NEW GAME STARTED');
};

export default startNewGame;
