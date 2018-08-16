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
}, {
  collation: {
    locale: 'en_US',
    strength: 1,
  },
});

export default mongoose.model('FrameRelationType', frameRelationTypeSchema);
