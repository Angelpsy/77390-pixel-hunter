import {expect, assert} from 'chai';
import {changeLevel} from './level';
import {initState} from './index';
import {INITIAL_STATE} from '../state/index';

describe(`reducer changeLevel`, () => {
  it(`should not mutate the state`, () => {
    const state = initState(INITIAL_STATE);
    const result = changeLevel(state, 1);
    expect(result).to.not.equal(state);
  });

  it(`should return correct level`, () => {
    [5, 7, 8, 10].forEach((level) => {
      const state = initState({
        level,
      });
      const result = changeLevel(state, level);
      expect(result.level).to.equal(level);
    });
  });

  it(`count lives should not be less than 0`, () => {
    [5, 7, 8, 10, 0, -10, -1, 1].forEach((level) => {
      const state = initState({
        level,
      });
      const result = changeLevel(state, level);
      assert(result.level >= 0, `result.lives(${result.level}) should not be less than 0`);
    });
  });
});
