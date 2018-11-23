import {expect} from 'chai';
import {addLevels} from './levels';
import {initState} from './index';
import {INITIAL_STATE} from '../state/index';

describe(`reducer decrementLives`, () => {
  it(`should not mutate the state`, () => {
    const state = initState(INITIAL_STATE);
    const result = addLevels(state);
    expect(result).to.not.equal(state);
  });

  it(`new state should contain property levels equal second parameter`, () => {
    const levels = [];
    const state = initState(INITIAL_STATE);
    const result = addLevels(state, levels);
    expect(result.levels).to.equal(levels);
  });
});
