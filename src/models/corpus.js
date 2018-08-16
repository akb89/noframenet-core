import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const corpusSchema = mongoose.Schema({
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
  documents: [{
    type: Number,
    ref: 'Document',
  }],
}, {
  collation: {
    locale: 'en_US',
    strength: 1,
  },
});

corpusSchema.index({
  documents: 1,
});

export default mongoose.model('Corpus', corpusSchema);
