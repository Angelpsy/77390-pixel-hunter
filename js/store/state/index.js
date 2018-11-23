import {initState} from '../reducers/index';
import CONFIG_GAME from '../../configGame';
import levels from './levels';

export const INITIAL_STATE = {
  level: 0,
  lives: CONFIG_GAME.MAX_LIVES,
  answers: [],
  levels,
};

const state = initState(INITIAL_STATE);

export default state;
