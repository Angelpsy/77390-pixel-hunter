/**
 * @param {{lives: number}} state
 * @return {{lives: number}}
 */
export const decrementLives = (state) => {
  const _lives = state.lives - 1;
  const _state = Object.assign({}, state, {
    lives: _lives < 0 ? 0 : _lives,
  });
  return _state;
};
