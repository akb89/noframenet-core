import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const feRelationSchema = mongoose.Schema({
  _id: {
    type: Number,
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

feRelationSchema.index({
  _id: 1,
}, {
  unique: true,
});

export default mongoose.model('FERelation', feRelationSchema);
