import intro from './intro';
import greeting from './greeting';
import rules from './rules';
import game1 from './game-1';
import game2 from './game-2';
import game3 from './game-3';
import stats from './stats';
import modalError from './modal-error';
import modalConfirm from './modal-confirm';

const SCREENS = {
  intro,
  greeting,
  rules,
  game1,
  game2,
  game3,
  stats,
  modalError,
  modalConfirm,
};


const SCREENS_REFS = {
  byId: {
    intro: {
      id: `intro`,
      rusName: `Интро`,
      element: SCREENS.intro,
    },
    greeting: {
      id: `greeting`,
      rusName: `Приветствие`,
      element: SCREENS.greeting,
    },
    rules: {
      id: `rules`,
      rusName: `Правила игры`,
      element: SCREENS.rules,
    },
    game1: {
      id: `game1`,
      rusName: `Игровой экран с двумя изображениями`,
      element: SCREENS.game1,
    },
    game2: {
      id: `game2`,
      rusName: `Игровой экран с одним изображением`,
      element: SCREENS.game2,
    },
    game3: {
      id: `game3`,
      rusName: `Игровой экран с тремя изображениями`,
      element: SCREENS.game3,
    },
    stats: {
      id: `stats`,
      rusName: `Общая статистика по всем игрокам`,
      element: SCREENS.stats,
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

export default screens;
