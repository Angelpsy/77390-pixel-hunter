import {getNodesFromString} from '../utils';
import {showScreen} from './utils';
import renderNextScreen from './level';
import renderFirstScreen from './greeting';
import {resetGame} from '../store/reducers/index';
import {INITIAL_STATE} from '../store/state/index';

const TEMPLATE = `
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
<section class="rules">
  <h2 class="rules__title">Правила</h2>
  <ul class="rules__description">
    <li>Угадай 10 раз для каждого изображения фото
      <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
      <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
    <li>Фотографиями или рисунками могут быть оба изображения.</li>
    <li>На каждую попытку отводится 30 секунд.</li>
    <li>Ошибиться можно не более 3 раз.</li>
  </ul>
  <p class="rules__ready">Готовы?</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</section>
`;

let userName;

const goNextScreen = (state) => {
  removeEventListeners();
  let _state = resetGame(state, INITIAL_STATE);
  renderNextScreen(_state);
};

const goFirstScreen = (state) => {
  removeEventListeners();
  renderFirstScreen(state);
};

const handlerInputName = (event) => {
  userName = event.target.value;
  handlerChangeUserName();
};

const handlerChangeUserName = () => {
  if (userName) {
    document.querySelector(`.rules__button`).removeAttribute(`disabled`);
  } else {
    document.querySelector(`.rules__button`).setAttribute(`disabled`, true);
  }
  document.querySelector(`.rules__input`).value = userName !== undefined ? userName : ``;
};

const removeEventListeners = () => {
  document.querySelector(`.rules__form`).removeEventListener(`submit`, goNextScreen);
  document.querySelector(`.rules__input`).removeEventListener(`input`, handlerInputName);
  document.querySelector(`.back`).removeEventListener(`click`, goFirstScreen);
};

const addEventListeners = (state) => {
  document.querySelector(`.rules__form`).addEventListener(`submit`, goNextScreen.bind(null, state));
  document.querySelector(`.rules__input`).addEventListener(`input`, handlerInputName);
  document.querySelector(`.back`).addEventListener(`click`, goFirstScreen.bind(null, state));
};

const nodes = getNodesFromString(TEMPLATE);

const render = (state) => {
  showScreen(nodes);
  handlerChangeUserName();
  addEventListeners(state);
};

export default render;
