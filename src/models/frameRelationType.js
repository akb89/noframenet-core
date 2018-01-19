import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameRelationTypeSchema = mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
    index: true,
  },
  subFrameName: {
    type: String,
    index: true,
  },
  supFrameName: {
    type: String,
    index: true,
  },
});

export default mongoose.model('FrameRelationType', frameRelationTypeSchema);
