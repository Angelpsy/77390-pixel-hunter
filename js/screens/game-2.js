import {getNodesFromString} from '../utils/dom';
import {showScreen} from './utils';
import renderNextScreen from './level';
import renderFirstScreen from './greeting';
import getGameHeader from './template-parts/game-header';
import getGameStats from './template-parts/game-stats';
import {addAnswer, changeLevel, decrementLives} from '../store/reducers/index';
import {resize} from '../utils/resize';

const FRAME_FOR_IMG_SIZES = {
  width: 705,
  height: 455,
};

const getGameSection = (state) => {
  const levelState = state.levels[state.level];
  const imgSize = resize(FRAME_FOR_IMG_SIZES, {
    width: levelState.questions[0].imgs[0].width,
    height: levelState.questions[0].imgs[0].height,
  });
  return `
  <section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${levelState.questions[0].imgs[0].url}" alt="Option 1" width="${imgSize.width}" height="${imgSize.height}">
        ${levelState.questions[0].answers.allIds
    .map((id) => levelState.questions[0].answers.byId[id])
    .map((answer) => {
      return `
          <label class="game__answer  game__answer--${answer.value}">
          <input class="visually-hidden" name="question1" type="radio" value="${answer.value}">
          <span>${answer.text}</span>
        </label>
          `;
    }).join(``)}
      </div>
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

const handlerChangeAnswer = (state, event) => {
  _answer = event.target.value;
  goNextScreen(state);
};

const removeEventListeners = () => {
  document.querySelector(`.game__content`).removeEventListener(`change`, handlerChangeAnswer);
  document.querySelector(`.back`).removeEventListener(`click`, goFirstScreen);
};

const addEventListeners = (state) => {
  document.querySelector(`.game__content`).addEventListener(`change`, handlerChangeAnswer.bind(null, state));
  document.querySelector(`.back`).addEventListener(`click`, goFirstScreen.bind(null, state));
};

const getNodes = (state) => {
  return getNodesFromString(getGameHeader(state) + getGameSection(state));
};

const render = (state) => {
  showScreen(getNodes(state));
  addEventListeners(state);
};

export default render;
