import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameSchema = mongoose.Schema({
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
  cBy: {
    type: String,
  },
  cDate: {
    type: String,
  },
  frameElements: [{
    type: Number,
    ref: 'FrameElement',
  }],
  feCoreSets: [
    [{
      type: Number,
      ref: 'FrameElement',
    }],
  ],
  lexUnits: [{
    type: Number,
    ref: 'LexUnit',
  }],
  semTypes: [{
    type: Number,
    ref: 'SemType',
  }],
});

frameSchema.index({
  frameElements: 1,
});
frameSchema.index({
  feCoreSets: 1,
});
frameSchema.index({
  lexUnits: 1,
});
frameSchema.index({
  semTypes: 1,
});

export default mongoose.model('Frame', frameSchema);
