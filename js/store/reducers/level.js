/**
 * @param {{level: number}} state
 * @param {number} newLevel
 * @return {{level: number}}
 */
export const changeLevel = (state, newLevel) => {
  const _state = Object.assign({}, state, {
    level: newLevel < 0 ? 0 : newLevel,
  });
  return _state;
};
