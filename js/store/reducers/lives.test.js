import {expect, assert} from 'chai';
import {decrementLives} from './lives';
import {initState} from './index';
import {INITIAL_STATE} from '../state/index';

describe(`reducer decrementLives`, () => {
  it(`should not mutate the state`, () => {
    const state = initState(INITIAL_STATE);
    const result = decrementLives(state);
    expect(result).to.not.equal(state);
  });

  it(`count lives should decrease by one`, () => {
    [5, 7, 8, 10].forEach((lives) => {
      const state = initState({
        lives,
      });
      const result = decrementLives(state);
      expect(result.lives).to.equal(lives - 1);
    });
  });

  it(`count lives should not be less than 0`, () => {
    [5, 7, 8, 10, 0, -10, -1, 1].forEach((lives) => {
      const state = initState({
        lives,
      });
      const result = decrementLives(state);
      assert(result.lives >= 0, `result.lives(${result.lives}) should not be less than 0`);
    });
  });
});
