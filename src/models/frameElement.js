import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameElementSchema = mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
    index: true,
  },
  definition: {
    type: String,
  },
  coreType: {
    type: String,
    index: true,
  },
  cBy: {
    type: String,
  },
  cDate: {
    type: String,
  },
  fgColor: {
    type: String,
  },
  bgColor: {
    type: String,
  },
  abbrev: {
    type: String,
    index: true,
  },
  requires: [{
    type: Number,
    ref: 'FrameElement',
  }],
  excludes: [{
    type: Number,
    ref: 'FrameElement',
  }],
  semTypes: [{
    type: Number,
    ref: 'SemType',
  }],
}, {
  collation: {
    locale: 'en_US',
    strength: 1,
  },
});

frameElementSchema.index({
  requires: 1,
});
frameElementSchema.index({
  excludes: 1,
});
frameElementSchema.index({
  semTypes: 1,
});

export default mongoose.model('FrameElement', frameElementSchema);
