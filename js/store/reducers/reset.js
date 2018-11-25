/**
 * @param {object} state
 * @param {object} initialState
 * @return {*}
 */
export const resetGame = (state, initialState) => {
  return Object.assign({}, state, {
    level: initialState.level,
    lives: initialState.lives,
    answers: initialState.answers.slice(),
  });
};
