import {getNodesFromString} from '../utils';
import {showScreen} from './utils';
import renderFirstScreen from './greeting';
import renderStats from './template-parts/game-stats';
import {getResult} from '../store/reducers/index';
import ConfigGame from '../configGame';

const getResultTable = (state) => {
  const count = getResult(state);
  const fastLevels = state.answers
    .filter((answer) => answer.isCorrect && answer.time < ConfigGame.TIME_ANSWER_FAST).length;
  const slowLevels = state.answers
    .filter((answer) => answer.isCorrect && answer.time > ConfigGame.TIME_ANSWER_SLOW).length;
  const countCorrectAnswers = state.answers
    .filter((answer) => answer.isCorrect).length;
  const lives = state.lives;
  if (count === -1) {
    return `
    <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          ${renderStats(state)}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">FAIL</td>
        </tr>
      </table>`;
  }
  return `
    <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            ${renderStats(state)}
          </td>
          <td class="result__points">× ${ConfigGame.POINT_FOR_CORRECT_ANSWER}</td>
          <td class="result__total">${countCorrectAnswers * ConfigGame.POINT_FOR_CORRECT_ANSWER}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${fastLevels}<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">× ${ConfigGame.POINT_FOR_CORRECT_FAST_ANSWER}</td>
          <td class="result__total">${fastLevels * ConfigGame.POINT_FOR_CORRECT_FAST_ANSWER}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${lives - 1} <span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× ${ConfigGame.POINT_FOR_ONE_LIVE}</td>
          <td class="result__total">${(lives - 1) * ConfigGame.POINT_FOR_ONE_LIVE}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${slowLevels}<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">× ${ConfigGame.POINT_FOR_CORRECT_SLOW_ANSWER}</td>
          <td class="result__total">${slowLevels ? `-` : ``}${slowLevels * ConfigGame.POINT_FOR_CORRECT_SLOW_ANSWER}</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${count}</td>
        </tr>
    </table>
  `;
};

const getSection = (state) => {
  return `
  <header class="header">
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
  </header>
  <section class="result">
    <h2 class="result__title">Победа!</h2>
    ${getResultTable(state)}
  </section>
`;
};

const goFirstScreen = (state) => {
  removeEventListeners();
  renderFirstScreen(state);
};

const removeEventListeners = () => {
  document.querySelector(`.back`).removeEventListener(`click`, goFirstScreen);
};

const addEventListeners = (state) => {
  document.querySelector(`.back`).addEventListener(`click`, goFirstScreen.bind(null, state));
};

const render = (state) => {
  showScreen(getNodesFromString(getSection(state)));
  addEventListeners(state);
};

export default render;
