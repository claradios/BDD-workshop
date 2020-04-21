import * as resulText from '../views/resultText.js';
import updateScore from '../views/updateScore.js';

const winColor = '#1FCE23';
const loseColor = '#a8251d';

export const clearScore = () => {
  window.userScore = 0;
  window.computerScore = 0;
};

export const increaseUserScore = () => {
  window.userScore += 1;
  console.log(`RESULT: ${window.userScore}:${window.computerScore}`);
  updateScore();
};

export const increaseComputerScore = () => {
  window.computerScore += 1;
  console.log(`RESULT: ${window.userScore}:${window.computerScore}`);
  updateScore();
};

export const scoreAfterDraw = () => updateScore();

export const endOfGame = () => {
  if (window.userScore >= window.finalResult) {
    resulText.changeTextFirstRow('End of game');
    resulText.changeToResultColor(winColor);
    resulText.changeTextSecondRow('CONGRATULATIONS!!!!');
    clearScore();
  }
  if (window.computerScore >= window.finalResult) {
    resulText.changeTextFirstRow('End of game');
    resulText.changeToResultColor(loseColor);
    resulText.changeTextSecondRow('Maybe next time');
    clearScore();
  }
};
