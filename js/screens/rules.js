import AbstractScreen from './abstract-screen';

let userName;

export default class GreetingScreen extends AbstractScreen {
  constructor(props) {
    super(props);
    this._userName = userName;

    this.handlerInputName = this.handlerInputName.bind(this);
  }

  get template() {
    return `
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
  }

  bind() {
    const inputUserName = this.element.querySelector(`.rules__input`);
    inputUserName.value = this._userName !== undefined ? this._userName : ``;
    this.handlerChangeUserName();
    inputUserName.addEventListener(`input`, this.handlerInputName);

    const form = this.element.querySelector(`.rules__form`);
    form.addEventListener(`submit`, this.handlerChangeScreen);

    const btnGoFistScreen = this.element.querySelector(`.back`);
    btnGoFistScreen.addEventListener(`click`, this.handlerGoFirstScreen);
  }

  handlerInputName(event) {
    this._userName = userName = event.target.value;
    this.handlerChangeUserName();
  }

  handlerChangeUserName() {
    if (this._userName) {
      this.element.querySelector(`.rules__button`).removeAttribute(`disabled`);
    } else {
      this.element.querySelector(`.rules__button`).setAttribute(`disabled`, `disabled`);
    }
  }

  handlerGoFirstScreen() {
    throw new Error(`handlerGoFirstScreen is required in instance class`);
  }
}
