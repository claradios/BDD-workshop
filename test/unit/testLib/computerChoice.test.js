import { expect } from 'chai';

import computer from '../../../src/js/lib/computer';

describe('Computer choice', () => {
  const mockMath = Object.create(global.Math);

  test('is rock', () => {
    mockMath.floor = () => 0;
    global.Math = mockMath;

    expect(computer.computerChoice()).to.be.equal('rock');
  });
  test('is paper', () => {
    mockMath.floor = () => 1;
    global.Math = mockMath;

    expect(computer.computerChoice()).to.be.equal('paper');

  });
  test('is scissors', () => {
    mockMath.floor = () => 2;
    global.Math = mockMath;

    expect(computer.computerChoice()).to.be.equal('scissors');

  });
});
