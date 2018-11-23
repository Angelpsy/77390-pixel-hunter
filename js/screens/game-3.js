import {getNodesFromString} from '../utils';
import {showScreen} from './utils';
import renderNextScreen from './stats';
import renderFirstScreen from './greeting';
import getGameHeader from './template-parts/game-header';

const TEMPLATE = `
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
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

const goNextScreen = () => {
  removeEventListeners();
  renderNextScreen();
};

const goFirstScreen = () => {
  removeEventListeners();
  renderFirstScreen();
};

const handlerClick = (event) => {
  if (!event.target.closest(`.game__option`)) {
    return;
  }

  goNextScreen();
};

const removeEventListeners = () => {
  document.querySelector(`.back`).removeEventListener(`click`, goFirstScreen);
  document.querySelector(`.game__content`).removeEventListener(`click`, handlerClick);
};
const addEventListeners = () => {
  document.querySelector(`.back`).addEventListener(`click`, goFirstScreen);
  document.querySelector(`.game__content`).addEventListener(`click`, handlerClick);
};

const nodes = getNodesFromString(getGameHeader() + TEMPLATE);

const render = () => {
  showScreen(nodes);
  addEventListeners();
};

export default render;
