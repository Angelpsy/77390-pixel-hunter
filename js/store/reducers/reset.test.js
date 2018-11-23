import {expect} from 'chai';
import {resetGame} from './reset';
import {changeLevel} from './level';
import {initState} from './index';
import {INITIAL_STATE} from '../state/index';

describe(`reducer resetGame`, () => {
  it(`should not mutate the state`, () => {
    const state = initState(INITIAL_STATE);
    const result = resetGame(state, INITIAL_STATE);
    expect(result).to.not.equal(state);
  });

  it(`should contain property level equal property level in second parameter`, () => {
    [{level: 5}, {level: 10}, {level: 0}, {level: -15}].forEach((secondState) => {
      const state = initState(INITIAL_STATE);
      const result = resetGame(state, secondState);
      expect(result.level).to.equal(secondState.level);
    });
  });

  it(`should reset state after change level`, () => {
    let state = initState(INITIAL_STATE);
    state = changeLevel(state, 5);
    const result = resetGame(state, INITIAL_STATE);
    expect(result.level).to.equal(INITIAL_STATE.level);
  });
});
