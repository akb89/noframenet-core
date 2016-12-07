import mongoose from 'mongoose';
import bluebird from 'bluebird';


mongoose.Promise = bluebird;

const frameRelationSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
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
  frames: 1,
});

export default mongoose.model('FrameRelation', frameRelationSchema);
