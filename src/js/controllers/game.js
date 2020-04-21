import * as resultText from '../views/resultText.js';
import computerModule from '../lib/computer.js';
import {
  increaseUserScore,
  increaseComputerScore,
  endOfGame,
  scoreAfterDraw,
} from '../lib/options.js';

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const winColor = '#1FCE23';
const loseColor = '#a8251d';
const drawColor = '#DCCB09';

window.computer = computerModule;

const resultGame = (userChoice, computer) => {
  let returnValue;
  switch (`${userChoice}-${computer}`) {
    case `${rock}-${scissors}`:
    case `${paper}-${rock}`:
    case `${scissors}-${paper}`:
      returnValue = 'win';
      break;
    case `${paper}-${scissors}`:
    case `${rock}-${paper}`:
    case `${scissors}-${rock}`:
      returnValue = 'lose';
      break;
    case `${rock}-${rock}`:
    case `${paper}-${paper}`:
    case `${scissors}-${scissors}`:
      returnValue = 'draw';
      break;
    default:
      throw new Error(`There is an error with options ${userChoice}-${computer}`);
  }
  return returnValue;
};

const game = userChoice => {
  const computer = window.computer.computerChoice();
  const result = resultGame(userChoice, computer);
  console.log(`USER: ${userChoice}`);
  console.log(`COMPUTER: ${computer} `);

  const resultOptions = {
    win: () => {
      resultText.changeTextFirstRow(`${userChoice.toUpperCase()} - ${computer.toUpperCase()}`);
      resultText.changeToResultColor(winColor);
      resultText.changeTextSecondRow('YOU WIN :)');
      increaseUserScore();
    },
    lose: () => {
      resultText.changeTextFirstRow(`${userChoice.toUpperCase()} - ${computer.toUpperCase()}`);
      resultText.changeToResultColor(loseColor);
      resultText.changeTextSecondRow('YOU LOSE :(');
      increaseComputerScore();
    },
    draw: () => {
      resultText.changeTextFirstRow(`${userChoice.toUpperCase()} - ${computer.toUpperCase()}`);
      resultText.changeToResultColor(drawColor);
      resultText.changeTextSecondRow('DRAW ~.~');
      scoreAfterDraw();
    },
  };

  resultOptions[result]();
  endOfGame();
};

export default game;
