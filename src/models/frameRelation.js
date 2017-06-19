import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameRelationSchema = mongoose.Schema({
  _id: {
    type: Number,
  },
  subFrame: {
    type: Number,
    ref: 'Frame',
    index: true,
  },
  supFrame: {
    type: Number,
    ref: 'Frame',
    index: true,
  },
  type: {
    type: Number,
    ref: 'FrameRelationType',
    index: true,
  },
});

frameRelationSchema.index({
  _id: 1,
}, {
  unique: true,
});

export default mongoose.model('FrameRelation', frameRelationSchema);
