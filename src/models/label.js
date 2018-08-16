import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const labelSchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  type: {
    type: String,
    index: true,
  },
  rank: {
    type: Number,
  },
  start: {
    type: Number,
  },
  end: {
    type: Number,
  },
}, {
  collation: {
    locale: 'en_US',
    strength: 1,
  },
});

export default mongoose.model('Label', labelSchema);
