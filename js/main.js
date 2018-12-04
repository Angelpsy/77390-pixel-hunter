import state from './store/state/index';
import {addLevels, decrementLives} from './store/reducers/index';
import levels from './levels';
import IntroScreen from './screens/intro';
import GreetingScreen from './screens/greeting';
import RulesScreen from './screens/rules';
import Game1Screen from './screens/game-1';
import Game2Screen from './screens/game-2';
import Game3Screen from './screens/game-3';
import StatsScreen from './screens/stats';
import {showScreen} from './screens/utils';
import {resetGame, addAnswer, changeLevel} from './store/reducers/index';
import {INITIAL_STATE} from './store/state/index';
import ConfigGame from './config-game';
import configGameScreens from './config-game-screens';

const renderStats = (_state) => {
  const screen = new StatsScreen(_state);
  screen.handlerGoFirstScreen = function () {
    renderGreeting(screen.state);
  };
  showScreen(screen.element);
};

const GamesScreens = {
  [configGameScreens.twoImages.id]: {
    render(_state) {
      const screen = new Game1Screen(_state);
      screen.handlerChangeScreen = function () {
        renderLevel(screen.state, screen.answer);
      };
      screen.handlerGoFirstScreen = function () {
        renderGreeting(_state);
      };
      showScreen(screen.element);
    },
  },
  [configGameScreens.oneImage.id]: {
    render(_state) {
      const screen = new Game2Screen(_state);
      screen.handlerChangeScreen = function () {
        renderLevel(screen.state, screen.answer);
      };
      screen.handlerGoFirstScreen = function () {
        renderGreeting(_state);
      };
      showScreen(screen.element);
    },
  },
  [configGameScreens.threeImages.id]: {
    render(_state) {
      const screen = new Game3Screen(_state);
      screen.handlerChangeScreen = function () {
        renderLevel(screen.state, screen.answer);
      };
      screen.handlerGoFirstScreen = function () {
        renderGreeting(_state);
      };
      showScreen(screen.element);
    },
  }
};

const renderLevel = (_state, answer = undefined) => {
  let _stateLevel = _state;
  if (answer) {
    _stateLevel = addAnswer(_state, answer);
    if (!answer.isCorrect) {
      _stateLevel = decrementLives(_stateLevel);
    }
    _stateLevel = changeLevel(_stateLevel, _stateLevel.level + 1);
  }
  const indexLevel = _stateLevel.level;
  const renderNextScreen = (indexLevel >= ConfigGame.AMOUNT_QUESTIONS || !_stateLevel.lives) ?
    renderStats :
    GamesScreens[_stateLevel.levels[indexLevel].type].render;

  renderNextScreen(_stateLevel);
};

const renderRules = (_state) => {
  const screen = new RulesScreen(_state);
  screen.handlerChangeScreen = function () {
    renderLevel(resetGame(screen.state, INITIAL_STATE));
  };
  screen.handlerGoFirstScreen = function () {
    renderGreeting(screen.state);
  };
  showScreen(screen.element);
};

const renderGreeting = (_state) => {
  const screen = new GreetingScreen(_state);
  screen.handlerChangeScreen = function () {
    renderRules(screen.state);
  };
  showScreen(screen.element);
};

const renderIntro = (_state) => {
  const screen = new IntroScreen(_state);
  screen.handlerChangeScreen = function () {
    renderGreeting(screen.state);
  };
  showScreen(screen.element);
};

const init = () => {
  let _state = addLevels(state, levels);
  renderIntro(_state);
};

init();

