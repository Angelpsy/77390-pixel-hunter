import {getNodesFromString} from '../utils/dom';
import {showScreen} from './utils';
import renderNextScreen from './level';
import renderFirstScreen from './greeting';
import getGameHeader from './template-parts/game-header';
import getGameStats from './template-parts/game-stats';
import {changeLevel, addAnswer, decrementLives} from '../store/reducers/index';

const getGameSection = (state) => {
  const levelState = state.levels[state.level];
  return `
    <section class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
        ${levelState.questions.map((question, index) => {
    return `<div class="game__option">
          <img src="${question.urls[0]}" alt="Option 1" width="468" height="458">
          ${question.answers.allIds.map((id) => question.answers.byId[id]).map((answer) => {
    return `
            <label class="game__answer game__answer--${answer.value}">
              <input class="visually-hidden" name="question${index + 1}" type="radio" value="${answer.value}">
              <span>${answer.text}</span>
            </label>          
          `;
  })
          .join(``)}
        </div>`;
  }).join(``)}
      </form>
      ${getGameStats(state)}
    </section>
`;
};

const DEFAULT_ANSWERS = {
  question1: undefined,
  question2: undefined,
};

let _answers = {};

const checkIsCorrectAnswer = (state, answers) => {
  const questions = state.levels[state.level].questions;
  return questions.every((question, index) => {
    return question.answers.byId[answers[index]].isCorrect;
  });
};

const goNextScreen = (state) => {
  removeEventListeners();
  const isCorrectAnswer = checkIsCorrectAnswer(state, [_answers.question1, _answers.question2]);
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
  _answers[event.target.name] = event.target.value;
  const isAllAnswers = Object.keys(_answers).every((key) => {
    return _answers[key] !== undefined;
  });

  if (isAllAnswers) {
    goNextScreen(state);
  }
};

const removeEventListeners = () => {
  document.querySelector(`.back`).removeEventListener(`click`, goFirstScreen);
  document.querySelector(`.game__content`).removeEventListener(`change`, handlerChangeAnswer);
};

const addEventListeners = (state) => {
  document.querySelector(`.back`).addEventListener(`click`, goFirstScreen.bind(null, state));
  document.querySelector(`.game__content`)
    .addEventListener(`change`, handlerChangeAnswer.bind(null, state));
};

const getNodes = (state) => {
  return getNodesFromString(getGameHeader(state) + getGameSection(state));
};

const render = (state) => {
  showScreen(getNodes(state));
  _answers = Object.assign({}, DEFAULT_ANSWERS);
  addEventListeners(state);
};

export default render;
