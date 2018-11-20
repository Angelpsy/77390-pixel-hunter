import {expect} from 'chai';
import {initState} from './index';

describe(`reducers`, () => {
  describe(`initState`, () => {
    it(`should return copy parameter`, () => {
      const obj = {
        a: {
          foo: `bar`,
        },
      };
      const result = initState(obj);
      expect(result).to.not.equal(obj);
      expect(result).to.deep.equal(obj);
    });
  });
});
