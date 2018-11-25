import {expect} from 'chai';
import {addAnswer} from './answer';
import {initState} from './index';
import {INITIAL_STATE} from '../state/index';

describe(`reducer addAnswer`, () => {
  const answer0 = {
    isCorrect: false,
  };

  const answer1 = {
    isCorrect: true,
  };

  const answer2 = {};

  const answer3 = {};

  it(`should not mutate the state`, () => {
    const state = initState(INITIAL_STATE);
    const result = addAnswer(state, answer1);
    expect(result).to.not.equal(state);
  });

  it(`should not mutate the state.answers`, () => {
    const state = initState(INITIAL_STATE);
    const result = addAnswer(state, answer1);
    expect(result.answers).to.not.equal(state.answers);
  });

  it(`answer should push in state.answers`, () => {
    const state = initState(INITIAL_STATE);
    const result = addAnswer(state, answer1);
    expect(result.answers[result.answers.length - 1]).to.include(answer1);
  });

  it(`answer should push in state.answers`, () => {
    [
      [answer0, answer1, answer2, answer3],
      [answer0, answer2, answer3],
      [answer0, answer1, answer3],
      [answer0],
      [answer3],
    ].forEach(checkPushOneAnswer);
  });
});


function checkPushOneAnswer(answers) {
  let state = initState(INITIAL_STATE);
  answers.forEach((answer) => {
    state = addAnswer(state, answer);
  });
  answers.forEach((answer, index) => {
    expect(state.answers[index]).to.equal(answer);
  });
}
