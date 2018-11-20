/**
 * @param {{answers: {}[]}} state
 * @param {{index: number, isCorrect: boolean, time: number}} answer
 * @return {*}
 */
export const changeAnswer = (state, answer) => {
  const answers = [...state.answers];
  answers[answer.index] = answer;
  const _state = Object.assign({}, state, {answers});
  return _state;
};
