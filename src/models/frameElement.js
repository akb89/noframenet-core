import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameElementSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
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
    index: true,
  }],
  excludes: [{
    type: Number,
    ref: 'FrameElement',
    index: true,
  }],
  semTypes: [{
    type: Number,
    ref: 'SemType',
    index: true,
  }],
});

frameElementSchema.index({
  feRelations: 1,
});
frameElementSchema.index({
  semTypes: 1,
});

export default mongoose.model('FrameElement', frameElementSchema);
