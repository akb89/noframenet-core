import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const sentenceSchema = mongoose.Schema({
  _id: {
    type: Number,
  },
  text: {
    type: String,
    text: true,
  },
  paragraphNumber: {
    type: Number,
    index: true,
  },
  sentenceNumber: {
    type: Number,
    index: true,
  },
  aPos: {
    type: Number,
  },
}, {
  collation: {
    locale: 'en_US',
    strength: 1,
  },
});

export default mongoose.model('Sentence', sentenceSchema);
