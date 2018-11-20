import {initState} from '../reducers/index';

export const INITIAL_STATE = {
  level: 0,
  lives: 2,
  answers: [],
};

const state = initState(INITIAL_STATE);

export default state;
