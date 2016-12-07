import mongoose from 'mongoose';
import bluebird from 'bluebird';


mongoose.Promise = bluebird;

const frameRelationTypeSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
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

export default mongoose.model('FrameRelationType', frameRelationTypeSchema);
