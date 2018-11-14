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

const screens = SCREENS_REFS.allIds
  .map((id) => SCREENS_REFS.byId[id]);

const insertElement = (el, parent) => {
  parent.innerHTML = ``;
  parent.appendChild(el.cloneNode(true));
};

const showScreen = (numberScreen) => {
  insertElement(screens[numberScreen].template.content, ROOT_EL);
};

showScreen(0);

