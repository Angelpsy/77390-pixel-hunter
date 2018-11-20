import CONFIG_GAME from '../../configGame';

/**
 * @param {{answers: {}[], lives: number}} state
 * @return {number}
 */
export const getResult = (state) => {
  const _answers = state.answers.filter((answer) => !!answer
    && answer.isCorrect !== undefined
    && answer.time !== undefined
  );
  if (_answers.length < 10) {
    return -1;
  }
  let points = 0;
  _answers.forEach((answer) => {
    if (answer.isCorrect) {
      points += CONFIG_GAME.pointForCorrectAnswer;

      if (answer.time <= CONFIG_GAME.timeAnswerFast) {
        points += CONFIG_GAME.pointForCorrectFastAnswer;
      } else if (answer.time >= CONFIG_GAME.timeAnswerSlow) {
        points -= CONFIG_GAME.pointForCorrectSlowAnswer;
      }
    }
  });
  points += state.lives * CONFIG_GAME.pointForOneLive;
  return points;
};
