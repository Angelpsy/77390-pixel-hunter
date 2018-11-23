import {getNodesFromString} from '../utils';
import {showScreen} from './utils';
import renderNextScreen from './game-2';
import renderFirstScreen from './greeting';
import getGameHeader from './template-parts/game-header';

const TEMPLATE = `
<section class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input class="visually-hidden" name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input class="visually-hidden" name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  <ul class="stats">
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--correct"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
  </ul>
</section>
`;

const DEFAULT_ANSWERS = {
  question1: undefined,
  question2: undefined,
};

let answers = {};

const goNextScreen = () => {
  removeEventListeners();
  renderNextScreen();
};

const goFirstScreen = () => {
  removeEventListeners();
  renderFirstScreen();
};

const handlerChangeAnswer = (event) => {
  answers[event.target.name] = event.target.value;
  const isAllAnswers = Object.keys(answers).every((key) => {
    return answers[key] !== undefined;
  });

  if (isAllAnswers) {
    goNextScreen();
  }
};

const removeEventListeners = () => {
  document.querySelector(`.back`).removeEventListener(`click`, goFirstScreen);
  document.querySelector(`.game__content`).removeEventListener(`change`, handlerChangeAnswer);
};

const addEventListeners = () => {
  document.querySelector(`.back`).addEventListener(`click`, goFirstScreen);
  document.querySelector(`.game__content`).addEventListener(`change`, handlerChangeAnswer);
};

const nodes = getNodesFromString(getGameHeader() + TEMPLATE);

const render = () => {
  showScreen(nodes);
  answers = Object.assign({}, DEFAULT_ANSWERS);
  addEventListeners();
};

export default render;
