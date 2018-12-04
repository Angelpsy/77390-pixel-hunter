import getGameHeader from './template-parts/game-header';
import getGameStats from './template-parts/game-stats';
import {resize} from '../utils/resize';
import AbstractScreen from './abstract-screen';

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

const checkIsCorrectAnswer = (state, answers) => {
  const questions = state.levels[state.level].questions;
  return questions.every((question, index) => {
    return question.answers.byId[answers[index]].isCorrect;
  });
};

export default class Game2Screen extends AbstractScreen {
  constructor(props) {
    super(props);

    this._answer = undefined;
    this.handlerChangeAnswer = this.handlerChangeAnswer.bind(this);
  }

  get template() {
    return getGameHeader(this.state) + getGameSection(this.state);
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    form.addEventListener(`change`, this.handlerChangeAnswer);

    const btnGoFirstScreen = this.element.querySelector(`.back`);
    btnGoFirstScreen.addEventListener(`click`, this.handlerGoFirstScreen);
  }

  setAnswer() {
    const isCorrect = checkIsCorrectAnswer(this.state, [this._answer]);
    this.answer = {
      isCorrect,
      time: 15,
    };
  }

  handlerChangeAnswer() {
    this._answer = event.target.value;
    this.setAnswer();
    this.handlerChangeScreen(this.state);
  }

  handlerGoFirstScreen() {
    throw new Error(`handlerGoFirstScreen is required in instance class`);
  }
}
