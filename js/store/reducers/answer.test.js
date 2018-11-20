import {expect} from 'chai';
import {changeAnswer} from './answer';
import {INITIAL_STATE} from '../state/index';

describe(`reducer changeAnswer`, () => {
  const answer0 = {
    index: 0,
    isCorrect: true,
    time: 20,
  };

  const answer1 = {
    index: 1,
    isCorrect: false,
    time: 10,
  };

  const answer2 = {
    index: 2,
    isCorrect: true,
    time: 30,
  };

  const answer3 = {
    index: 3,
    isCorrect: true,
    time: 24,
  };

  it(`should not mutate the state`, () => {
    const state = Object.assign({}, INITIAL_STATE);
    const result = changeAnswer(state, answer1);
    expect(result).to.not.equal(state);
  });

  it(`should not mutate the state.answers`, () => {
    const state = Object.assign({}, INITIAL_STATE);
    const result = changeAnswer(state, answer1);
    expect(result.answers).to.not.equal(state.answers);
  });

  it(`answer should insert in state.answers`, () => {
    const state = Object.assign({}, INITIAL_STATE);
    const result = changeAnswer(state, answer1);
    expect(result.answers).to.include(answer1);
  });

  it(`answer should insert in state.answers[answer.index]`, () => {
    [answer0, answer1, answer2, answer3].forEach(checkInsertOneAnswer);
  });
});


function checkInsertOneAnswer(answer) {
  const state = Object.assign({}, INITIAL_STATE);
  const result = changeAnswer(state, answer);
  expect(result.answers[answer.index]).to.equal(answer);
}
