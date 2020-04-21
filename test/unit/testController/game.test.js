import * as resultText from '../../../src/js/views/resultText.js';
import computerModule from '../../../src/js/lib/computer.js';
import * as options from '../../../src/js/lib/options.js';
import game from '../../../src/js/controllers/game';

const optionsToTest = [
  ['rock', 'rock', 'draw', 'DRAW ~.~'],
  ['rock', 'paper', 'lose', 'YOU LOSE :('],
  ['rock', 'scissors', 'win', 'YOU WIN :)'],
  ['paper', 'rock', 'win', 'YOU WIN :)'],
  ['paper', 'paper', 'draw', 'DRAW ~.~'],
  ['paper', 'scissors', 'lose', 'YOU LOSE :('],
  ['scissors', 'scissors', 'draw', 'DRAW ~.~'],
  ['scissors', 'rock', 'lose', 'YOU LOSE :('],
  ['scissors', 'paper', 'win', 'YOU WIN :)'],
];

describe.each(optionsToTest)('Result game when options are %s - %s', (option1, option2, result) => {
  test(`is ${result}`, () => {
    const resultGame = game.__get__('resultGame');

    expect(resultGame(option1, option2)).toBe(result);
  });
});

describe.each(optionsToTest)('Game executed with user option %s}', (option1, option2, result, resultGame) => {
  beforeAll(() => {
    jest.mock('../../../src/js/views/resultText.js');
    jest.mock('../../../src/js/lib/computer.js');
    jest.mock('../../../src/js/lib/options.js');
  });
  beforeEach(() => {
    jest.clearAllMocks();
    game(option1);
  });
});
