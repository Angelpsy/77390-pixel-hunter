import screenGame1 from './screens/game-1';
import screenGame2 from './screens/game-2';
import screenGame3 from './screens/game-3';

export const ConfigGameScreens = {
  oneImage: {
    id: `oneImage`,
    render: screenGame2,
  },
  twoImages: {
    id: `twoImages`,
    render: screenGame1,
  },
  threeImages: {
    id: `threeImages`,
    render: screenGame3,
  },
};

export default ConfigGameScreens;
