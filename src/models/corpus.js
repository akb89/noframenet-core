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
});

corpusSchema.index({
  documents: 1,
});
corpusSchema.index({
  _id: 1,
}, {
  unique: true,
});

export default mongoose.model('Corpus', corpusSchema);
