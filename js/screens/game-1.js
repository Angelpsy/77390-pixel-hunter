import getGameHeader from './template-parts/game-header';
import getGameStats from './template-parts/game-stats';
import {resize} from '../utils/resize';
import AbstractScreen from './abstract-screen';

const FRAME_FOR_IMG_SIZES = {
  width: 468,
  height: 458,
};

const getGameSection = (state) => {
  const levelState = state.levels[state.level];
  return `
    <section class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
        ${levelState.questions.map((question, index) => {
    const imgSize = resize(FRAME_FOR_IMG_SIZES, {
      width: question.imgs[0].width,
      height: question.imgs[0].height,
    });
    return `<div class="game__option">
          <img src="${question.imgs[0].url}" alt="Option 1" width="${imgSize.width}" height="${imgSize.height}">
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

const checkIsCorrectAnswer = (state, answers) => {
  const questions = state.levels[state.level].questions;
  return questions.every((question, index) => {
    return question.answers.byId[answers[index]].isCorrect;
  });
};

export default class Game1Screen extends AbstractScreen {
  constructor(props) {
    super(props);

    this._answers = Object.assign({}, DEFAULT_ANSWERS);
    this.handlerChangeAnswer = this.handlerChangeAnswer.bind(this);
  }

  get template() {
    return getGameHeader(this.state) + getGameSection(this.state);
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    form.addEventListener(`change`, this.handlerChangeAnswer);

    const btnGoFistScreen = this.element.querySelector(`.back`);
    btnGoFistScreen.addEventListener(`click`, this.handlerGoFirstScreen);
  }

  setAnswer() {
    const isCorrect = checkIsCorrectAnswer(this.state, [this._answers.question1, this._answers.question2]);
    this.answer = {
      isCorrect,
      time: 15,
    };
  }

  handlerChangeAnswer() {
    this._answers[event.target.name] = event.target.value;
    const isAllAnswers = Object.keys(this._answers).every((key) => {
      return this._answers[key] !== undefined;
    });

    if (isAllAnswers) {
      this.setAnswer();
      this.handlerChangeScreen(this.state);
    }
  }

  handlerGoFirstScreen() {
    throw new Error(`handlerGoFirstScreen is required in instance class`);
  }
}
