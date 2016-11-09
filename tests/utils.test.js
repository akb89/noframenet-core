import chai from 'chai';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import Set from './../src/utils/utils';

mongoose.Promise = bluebird;
const should = chai.should();

const TestObjectId = mongoose.model('TestObjectId', {
  name: {
    type: String,
  },
});

const TestNumId = mongoose.model('TestNumId', {
  _id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
  },
});

const object1 = new TestObjectId({
  _id: mongoose.Types.ObjectId('57fc93d66cc52246ae36adc6'),
  name: 'name_test_1',
});
const object2 = new TestObjectId({
  _id: mongoose.Types.ObjectId('57fc93d66cc52246ae36adc6'),
  name: 'name_test_2',
});
const object3 = new TestObjectId({
  _id: '57fc93d66cc52246ae36adc7',
  name: 'name_test_2',
});
const object4 = new TestNumId({
  _id: 19283746,
  name: 'name_test_4',
});
const object5 = new TestNumId({
  _id: 19283746,
  name: 'name_test_5',
});
const object6 = new TestNumId({
  _id: 19283747,
  name: 'name_test_5',
});

describe('Utils', () => {
  before(() => {

  });
  it('Two objects with the same ObjectId._id should be considered equal', () => {
    const set = new Set([object1]);
    set.has(object2).should.equal(true);
    set.add(object2);
    set.length.should.equal(1);
    set.toArray()[0].name.should.equal('name_test_1');
  });
  it('Two objects with the same Number._id should be considered equal', () => {
    const set = new Set([object4]);
    set.has(object5).should.equal(true);
    set.add(object5);
    set.length.should.equal(1);
    set.toArray()[0].name.should.equal('name_test_4');
  });
  it('Two objects with the same name and a different ObjectId._id should not be considered equal', () => {
    const set = new Set([object2]);
    set.has(object3).should.equal(false);
    set.add(object3);
    set.length.should.equal(2);
    set.has(object3).should.equal(true);
  });
  it('Two objects with the same name and a different Number._id should not be considered equal', () => {
    const set = new Set([object5]);
    set.has(object6).should.equal(false);
    set.add(object6);
    set.length.should.equal(2);
    set.has(object6).should.equal(true);
  });
});
