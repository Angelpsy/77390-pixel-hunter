'use strict';

const ROOT_EL = document.querySelector(`#main`);

const SCREENS_REFS = {
  byId: {
    intro: {
      id: `intro`,
      rusName: `Интро`,
      template: document.querySelector(`#intro`),
    },
    greeting: {
      id: `greeting`,
      rusName: `Приветствие`,
      template: document.querySelector(`#greeting`),
    },
    rules: {
      id: `rules`,
      rusName: `Правила игры`,
      template: document.querySelector(`#rules`),
    },
    game1: {
      id: `game1`,
      rusName: `Игровой экран с двумя изображениями`,
      template: document.querySelector(`#game-1`),
    },
    game2: {
      id: `game2`,
      rusName: `Игровой экран с одним изображением`,
      template: document.querySelector(`#game-2`),
    },
    game3: {
      id: `game3`,
      rusName: `Игровой экран с тремя изображениями`,
      template: document.querySelector(`#game-3`),
    },
    stats: {
      id: `stats`,
      rusName: `Общая статистика по всем игрокам`,
      template: document.querySelector(`#stats`),
    },
  },
  allIds: [
    `intro`,
    `greeting`,
    `rules`,
    `game1`,
    `game2`,
    `game3`,
    `stats`,
  ],
};

const elementsClasses = {
  ARROW_LEFT: `js-arrows-left`,
  ARROW_RIGHT: `js-arrows-right`,
};

const screens = SCREENS_REFS.allIds
  .map((id) => SCREENS_REFS.byId[id]);

let indexCurrentScreen;

const showScreen = (numberScreen) => {
  ROOT_EL.innerHTML = ``;
  ROOT_EL.appendChild(screens[numberScreen].template.content.cloneNode(true));
  indexCurrentScreen = numberScreen;
};

const showNextScreen = () => {
  if (indexCurrentScreen >= screens.length - 1) {
    return;
  }
  showScreen(indexCurrentScreen + 1);
};

const showPrevScreen = () => {
  if (indexCurrentScreen <= 0) {
    return;
  }
  showScreen(indexCurrentScreen - 1);
};

const handlerKeyDown = (event) => {
  const keyCode = event.code;
  switch (keyCode) {
    case `ArrowRight`:
      showNextScreen();
      break;
    case `ArrowLeft`:
      showPrevScreen();
      break;
  }
};

const addArrows = () => {
  const wrapperEl = document.createElement(`div`);
  wrapperEl.className = `arrows__wrap`;
  wrapperEl.innerHTML = `
        <style>
          .arrows__wrap {
            position: absolute;
            top: 95px;
            left: 50%;
            margin-left: -56px;
          }
          .arrows__btn {
            background: none;
            border: 2px solid black;
            padding: 5px 20px;
          }
        </style>
        <button class="arrows__btn ${elementsClasses.ARROW_LEFT}"><-</button>
        <button class="arrows__btn ${elementsClasses.ARROW_RIGHT}">-></button>  
  `;
  document.body.appendChild(wrapperEl);
};

const addEventListenersToArrows = () => {
  document.querySelector(`.${elementsClasses.ARROW_LEFT}`).addEventListener(`click`, showPrevScreen);
  document.querySelector(`.${elementsClasses.ARROW_RIGHT}`).addEventListener(`click`, showNextScreen);
};


const addCommonEventListeners = () => {
  document.addEventListener(`keydown`, handlerKeyDown);
};

const init = () => {
  showScreen(0);
  addArrows();
  addEventListenersToArrows();
  addCommonEventListeners();
};

init();

