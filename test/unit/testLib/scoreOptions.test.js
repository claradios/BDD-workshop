import { expect } from 'chai';

import {
  clearScore,
  increaseUserScore,
  increaseComputerScore,
  scoreAfterDraw,
} from '../../../src/js/lib/options';

jest.mock('../../../src/js/views/updateScore.js', () => {
  return {
    __esModule: true, // mandatory for mocking and ES6 module
    default: jest.fn(() => true),
  }
});

describe('Score', () => {
  beforeEach(() => {
    window.userScore = 3;
    window.computerScore = 2;
  });
  test('user cleared', () => {
    clearScore();

    expect(window.userScore).to.be.equal(0);
  });
  test('computer cleared', () => {
    clearScore();

    expect(window.computerScore).to.be.equal(0);

  });
  test('user increased', () => {
    increaseUserScore();

    expect(window.userScore).to.be.equal(4);
  });
  test('computer increased', () => {
    increaseComputerScore();

    expect(window.computerScore).to.be.equal(3);
  });
  test('equals after draw', () => {
    scoreAfterDraw();

    expect(window.userScore).to.be.equal(3);
    expect(window.computerScore).to.be.equal(2);
  });
});
