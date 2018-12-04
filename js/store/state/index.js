import {initState} from '../reducers/index';
import ConfigGame from '../../config-game';

export const INITIAL_STATE = {
  level: 0,
  lives: ConfigGame.MAX_LIVES,
  answers: [],
};

const state = initState(INITIAL_STATE);

export default state;
