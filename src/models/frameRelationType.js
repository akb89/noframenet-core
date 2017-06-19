import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameRelationTypeSchema = mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
  subFrameName: {
    type: String,
  },
  supFrameName: {
    type: String,
  },
});

frameRelationTypeSchema.index({
  _id: 1,
}, {
  unique: true,
});

export default mongoose.model('FrameRelationType', frameRelationTypeSchema);
