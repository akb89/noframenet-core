'use strict';

import chai from 'chai';
import Set from './../utils/utils';

const should = chai.should(); // eslint-disable-line no-unused-vars

describe('SetUtils', () => {
  before(() => {

  });
  it('Set#equals should correctly identify same _id patterns', () => {
    const object1 = {
      _id: '57fc93d66cc52246ae36adc6',
      name: 'name_test 1'
    }
    const object2 = {
      _id: '57fc93d66cc52246ae36adc6',
      name: 'name_test 1'
    }
    const object3 = {
      _id: 19283746,
      name: 'name_test 1'
    }
    const object4 = {
      _id: 19283746,
      name: 'name_test 1'
    }
    const pattern1 = new Pattern({ _id: '57fc93d66cc52246ae36adc6' });
    const pattern2 = new Pattern({ _id: '57fc93d66cc52246ae36adc6' });
    const pSet = new Set([pattern1]);
    pSet.has(pattern2).should.equal(true);
    pSet.add(pattern2);
    pSet.length.should.equal(1);
  });
});
