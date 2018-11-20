import {expect} from 'chai';
import {initState} from './index';

describe(`reducer initState`, () => {
  it(`should return copy state`, () => {
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
