import game from './controllers/game.js';
import startNewGame from './controllers/startNewGame.js';

window.userScore = 0;
window.computerScore = 0;
window.finalResult = 5;
window.resultTextInitialMessage = 'Select your choice to start the game';

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const rockElement = document.getElementById(rock);
const paperElement = document.getElementById(paper);
const scissorsElement = document.getElementById(scissors);
const newGameBtn = document.getElementById('new-game-button');


rockElement.addEventListener('click', () => game(rock));
paperElement.addEventListener('click', () => game(paper));
scissorsElement.addEventListener('click', () => game(scissors));
newGameBtn.addEventListener('click', () => startNewGame());
