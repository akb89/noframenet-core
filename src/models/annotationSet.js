import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const annoSetSchema = mongoose.Schema({
  _id: {
    type: Number,
  },
  sentence: {
    type: Number,
    ref: 'Sentence',
    index: true,
  },
  lexUnit: {
    type: Number,
    ref: 'LexUnit',
    index: true,
  },
  pattern: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pattern',
    index: true,
  },
  labels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Label',
  }],
  fAnnotation: {
    type: String,
  },
});

export default mongoose.model('AnnotationSet', annoSetSchema);
