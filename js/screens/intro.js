import {getNodesFromString} from '../utils';
import {showScreen} from './utils';
import renderNextScreen from './greeting';

const TEMPLATE = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
`;

const goNextScreen = (state) => {
  removeEventListeners();
  renderNextScreen(state);
};

const removeEventListeners = () => {
  document.querySelector(`.intro__asterisk`).removeEventListener(`click`, goNextScreen);
};

const addEventListeners = (state) => {
  document.querySelector(`.intro__asterisk`).addEventListener(`click`, goNextScreen.bind(null, state));
};

const nodes = getNodesFromString(TEMPLATE);

const render = (state) => {
  showScreen(nodes);
  addEventListeners(state);
};

export default render;
