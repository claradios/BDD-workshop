import * as resultText from '../../../src/js/views/resultText';

describe('After selecting choices', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div id="result-text">
      <p>initial text</p>
      <p></p>
    </div>`;
  });
  test('it shows choices', () => {
    resultText.changeTextFirstRow('first row');

    const choicesText = document.querySelector('#result-text p').textContent;
    expect(choicesText).toBe('first row');
  });

  test('it shows result', () => {
    resultText.changeTextSecondRow('second row');

    const choicesText = document.querySelector('#result-text p:nth-of-type(2)').textContent;
    expect(choicesText).toBe('second row');

  });
  test('change result text color', () => {
    resultText.changeToResultColor('rgb(255, 99, 71)');

    const color = document.querySelector('#result-text p:nth-of-type(2)').style.color;
    expect(color).toBe('rgb(255, 99, 71)');
  })
})
