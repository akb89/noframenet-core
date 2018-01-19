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
});

export default mongoose.model('Sentence', sentenceSchema);
