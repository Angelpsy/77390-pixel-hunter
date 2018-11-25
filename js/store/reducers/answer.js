/**
 * @param {{answers: {}[]}} state
 * @param {{isCorrect: boolean, time: number}} answer
 * @return {*}
 */
export const addAnswer = (state, answer) => {
  const answers = [...state.answers];
  answers.push(answer);
  const _state = Object.assign({}, state, {answers});
  return _state;
};
