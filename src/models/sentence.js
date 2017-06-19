import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const sentenceSchema = mongoose.Schema({ // eslint-disable-line new-cap
  _id: {
    type: Number,
  },
  text: {
    type: String,
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

sentenceSchema.index({
  _id: 1,
}, {
  unique: true,
});

export default mongoose.model('Sentence', sentenceSchema);
