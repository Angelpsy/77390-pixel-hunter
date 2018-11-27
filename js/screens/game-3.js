import {getNodesFromString} from '../utils/dom';
import {showScreen} from './utils';
import renderNextScreen from './level';
import renderFirstScreen from './greeting';
import getGameHeader from './template-parts/game-header';
import getGameStats from './template-parts/game-stats';
import {addAnswer, changeLevel, decrementLives} from '../store/reducers/index';
import {resize} from '../utils/resize';

const FRAME_FOR_IMG_SIZES = {
  width: 304,
  height: 455,
};

const getGameSection = (state) => {
  const levelState = state.levels[state.level];
  return `
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content game__content--triple">
    ${levelState.questions[0].imgs.map((img, index) => {
    const imgSize = resize(FRAME_FOR_IMG_SIZES, {
      width: img.width,
      height: img.height,
    });
    return `
      <div class="game__option" data-value="${index}">
        <img src="${img.url}" alt="Option ${index}" width="${imgSize.width}" height="${imgSize.height}">
      </div>
`;
  })}
    </form>
    ${getGameStats(state)}
  </section>
`;
};

let _answer;

const checkIsCorrectAnswer = (state, answers) => {
  const questions = state.levels[state.level].questions;
  return questions.every((question, index) => {
    return question.answers.byId[answers[index]].isCorrect;
  });
};

const goNextScreen = (state) => {
  removeEventListeners();
  const isCorrectAnswer = checkIsCorrectAnswer(state, [_answer]);
  let _state;
  _state = addAnswer(state, {
    time: 15,
    isCorrect: isCorrectAnswer,
  });
  if (!isCorrectAnswer) {
    _state = decrementLives(_state);
  }
  _state = changeLevel(_state, state.level + 1);
  renderNextScreen(_state);
};

const goFirstScreen = (state) => {
  removeEventListeners();
  renderFirstScreen(state);
};

const handlerClick = (state, event) => {
  const target = event.target.closest(`.game__option`);
  if (!target) {
    return;
  }

  _answer = target.dataset.value;

  goNextScreen(state);
};

const removeEventListeners = () => {
  document.querySelector(`.back`).removeEventListener(`click`, goFirstScreen);
  document.querySelector(`.game__content`).removeEventListener(`click`, handlerClick);
};
const addEventListeners = (state) => {
  document.querySelector(`.back`).addEventListener(`click`, goFirstScreen.bind(null, state));
  document.querySelector(`.game__content`).addEventListener(`click`, handlerClick.bind(null, state));
};

const getNodes = (state) => {
  return getNodesFromString(getGameHeader(state) + getGameSection(state));
};

const render = (state) => {
  showScreen(getNodes(state));
  addEventListeners(state);
};

export default render;
