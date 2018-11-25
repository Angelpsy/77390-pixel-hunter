import renderIntro from './screens/intro';
import state from './store/state/index';
import {addLevels} from './store/reducers/index';
import levels from './levels';

const init = () => {
  let _state = addLevels(state, levels);
  renderIntro(_state);
};

init();

