import getGameHeader from './template-parts/game-header';
import getGameStats from './template-parts/game-stats';
import {resize} from '../utils/resize';
import AbstractScreen from './abstract-screen';
import {TMP_TIME_ANSWER_AVERAGE} from '../config-game';

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
const checkIsCorrectAnswer = (state, answers) => {
  const questions = state.levels[state.level].questions;
  return questions.every((question, index) => {
    return question.answers.byId[answers[index]].isCorrect;
  });
};

export default class Game3Screen extends AbstractScreen {
  constructor(props) {
    super(props);

    this._answer = undefined;
    this.handlerClick = this.handlerClick.bind(this);
  }

  get template() {
    return getGameHeader(this.state) + getGameSection(this.state);
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    form.addEventListener(`click`, this.handlerClick);

    const btnGoFirstScreen = this.element.querySelector(`.back`);
    btnGoFirstScreen.addEventListener(`click`, this.handlerGoFirstScreen);
  }

  setAnswer() {
    const isCorrect = checkIsCorrectAnswer(this.state, [this._answer]);
    this.answer = {
      isCorrect,
      time: TMP_TIME_ANSWER_AVERAGE,
    };
  }

  handlerChangeAnswer(value) {
    this._answer = value;
    this.setAnswer();
    this.handlerChangeScreen(this.state);
  }

  handlerClick() {
    const target = event.target.closest(`.game__option`);
    if (!target) {
      return;
    }

    this.handlerChangeAnswer(target.dataset.value);
  }

  handlerGoFirstScreen() {
    throw new Error(`handlerGoFirstScreen is required in instance class`);
  }
}
