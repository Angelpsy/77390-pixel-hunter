import {getElementFromString} from '../utils';
import {showScreen} from './utils';
import renderNextScreen from './greeting';

const template = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
`;

const goNextScreen = () => {
  removeEventListeners();
  renderNextScreen();
};

const removeEventListeners = () => {
  document.querySelector(`.intro__asterisk`).removeEventListener(`click`, goNextScreen);
};

const addEventListeners = () => {
  document.querySelector(`.intro__asterisk`).addEventListener(`click`, goNextScreen);
};

const el = getElementFromString(template);

const render = () => {
  showScreen(el);
  addEventListeners();
};

export default render;
