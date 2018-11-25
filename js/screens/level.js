import ConfigGame from '../configGame';
import configGameScreens from '../configGameScreens';
import renderStats from './stats';

const render = (state) => {
  const indexLevel = state.level;
  const renderNextScreen = (indexLevel >= ConfigGame.AMOUNT_QUESTIONS || !state.lives) ?
    renderStats :
    configGameScreens[state.levels[indexLevel].type].render;

  renderNextScreen(state);
};

export default render;
