import {getNodesFromString} from '../utils';
import {showScreen} from './utils';
import renderNextScreen from './level';
import renderFirstScreen from './greeting';
import getGameHeader from './template-parts/game-header';
import {addAnswer, changeLevel} from '../store/reducers/index';

const TEMPLATE = `
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content game__content--triple">
      <div class="game__option" data-value="0">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected" data-value="1">
        <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option" data-value="2">
        <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </section>
`;

let _answer;

const checkIsCorrectAnswer = (state, answers) => {
  const questions = state.levels[state.level].questions;
  return questions.every((question, index) => {
    return question.answers.byId[answers[index]].isCorrect;
  });
};

const goNextScreen = (state) => {
  removeEventListeners();
  let _state;
  _state = addAnswer(state, {
    time: 15,
    isCorrect: checkIsCorrectAnswer(state, [_answer]),
  });
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

const nodes = getNodesFromString(getGameHeader() + TEMPLATE);

const render = (state) => {
  showScreen(nodes);
  addEventListeners(state);
};

export default render;
