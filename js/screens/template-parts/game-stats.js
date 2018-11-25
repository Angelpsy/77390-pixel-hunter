import ConfigGame from '../../configGame';

const getGameStats = (state) => {
  const _levelsResults = [...new Array(ConfigGame.AMOUNT_QUESTIONS)].map((_, index) => {
    if (!state.answers[index]) {
      return `unknown`;
    }
    if (!state.answers[index].isCorrect) {
      return `wrong`;
    }
    if (state.answers[index].time < ConfigGame.TIME_ANSWER_FAST) {
      return `fast`;
    }
    if (state.answers[index].time > ConfigGame.TIME_ANSWER_SLOW) {
      return `slow`;
    }
    return `correct`;
  });
  return `
  <ul class="stats">
    ${_levelsResults.map((result) => {
    return `<li class="stats__result stats__result--${result}"></li>`;
  }).join(``)}
  </ul>`;
};

export default getGameStats;
