import ConfigGame from '../../config-game';

/**
 * @param {{answers: {}[], lives: number}} state
 * @return {number}
 */
export const getResult = (state) => {
  const _answers = state.answers.filter((answer) => !!answer
    && answer.isCorrect !== undefined
    && answer.time !== undefined
  );
  if (_answers.length < ConfigGame.AMOUNT_QUESTIONS) {
    return -1;
  }
  let points = 0;
  _answers.forEach((answer) => {
    if (answer.isCorrect) {
      points += ConfigGame.POINT_FOR_CORRECT_ANSWER;

      if (answer.time <= ConfigGame.TIME_ANSWER_FAST) {
        points += ConfigGame.POINT_FOR_CORRECT_FAST_ANSWER;
      } else if (answer.time >= ConfigGame.TIME_ANSWER_SLOW) {
        points -= ConfigGame.POINT_FOR_CORRECT_SLOW_ANSWER;
      }
    }
  });
  points += state.lives * ConfigGame.POINT_FOR_ONE_LIVE;
  return points;
};
