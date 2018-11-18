import screens from './screens/index.js';

const ROOT_EL = document.querySelector(`#main`);

const ElementsClasses = {
  ARROW_LEFT: `js-arrows-left`,
  ARROW_RIGHT: `js-arrows-right`,
};

let indexCurrentScreen;

const showScreen = (numberScreen) => {
  ROOT_EL.innerHTML = ``;
  ROOT_EL.appendChild(screens[numberScreen].element.cloneNode(true));
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
        <button class="arrows__btn ${ElementsClasses.ARROW_LEFT}"><-</button>
        <button class="arrows__btn ${ElementsClasses.ARROW_RIGHT}">-></button>  
  `;
  document.body.appendChild(wrapperEl);
};

const addEventListenersToArrows = () => {
  document.querySelector(`.${ElementsClasses.ARROW_LEFT}`).addEventListener(`click`, showPrevScreen);
  document.querySelector(`.${ElementsClasses.ARROW_RIGHT}`).addEventListener(`click`, showNextScreen);
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

