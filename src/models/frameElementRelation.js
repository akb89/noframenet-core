import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameElementRelationSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
  },
  subFE: {
    type: Number,
    ref: 'FrameElement',
    index: true,
  },
  supFE: {
    type: Number,
    ref: 'FrameElement',
    index: true,
  },
  frameRelation: {
    type: Number,
    ref: 'FrameRelation',
    index: true,
  },
});
frameElementRelationSchema.index({
  frameElements: 1,
});

export default mongoose.model('FERelation', frameElementRelationSchema);
