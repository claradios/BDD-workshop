import { endOfGame } from '../../../src/js/lib/options';
import * as  resultText from '../../../src/js/views/resultText';

jest.mock('../../../src/js/views/resultText');

describe('End of game', () => {
  describe('user wins', () => {
    beforeEach(() => {
      window.userScore = 5;
      window.computerScore = 4;
      window.finalResult = 5;
      jest.clearAllMocks();
    });

    test('shows message "End of game"', () => {
      endOfGame();
      expect(resultText.changeTextFirstRow).toBeCalledWith('End of game');
    });
    test('shows message "Congrats"', () => {
      endOfGame();
      expect(resultText.changeTextSecondRow).toBeCalledWith('CONGRATULATIONS!!!!');
    });
    test('paint with win color', () => {
      endOfGame();
      expect(resultText.changeToResultColor).toBeCalledWith('#1FCE23');
    });
    test('the score is restarted', () => {
      endOfGame();
      expect(window.userScore).toBe(0);
      expect(window.computerScore).toBe(0);
    });
  });
  describe('computer wins', () => {
    beforeEach(() => {
      window.userScore = 4;
      window.computerScore = 5;
      window.finalResult = 5;
      jest.clearAllMocks();
    });


    test('shows message "End of game"', () => {
      endOfGame();
      expect(resultText.changeTextFirstRow).toBeCalledWith('End of game');
    });
    test('shows message "Maybe next time"', () => {
      endOfGame();
      expect(resultText.changeTextSecondRow).toBeCalledWith('Maybe next time');
    });
    test('paint with lose color', () => {
      endOfGame();
      expect(resultText.changeToResultColor).toBeCalledWith('#a8251d');
    });
    test('the score is restarted', () => {
      endOfGame();
      expect(window.userScore).toBe(0);
      expect(window.computerScore).toBe(0);
    });
  });
});
