import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const documentSchema = mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
    index: true,
  },
  description: {
    type: String,
  },
  sentences: [{
    type: Number,
    ref: 'Sentence',
  }],
}, {
  collation: {
    locale: 'en_US',
    strength: 1,
  },
});

documentSchema.index({
  sentences: 1,
});

export default mongoose.model('Document', documentSchema);
