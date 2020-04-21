const resultTextRows = () => document.querySelectorAll('#result-text p');

const resultTextRow = row => resultTextRows()[row - 1];

export const changeTextFirstRow = text => {
  return resultTextRow(1).innerHTML = text;
};

export const changeTextSecondRow = text => {
  return resultTextRow(2).innerHTML = text;
};

export const changeToResultColor = color => {
  return resultTextRow(2).style.color = color;
};
