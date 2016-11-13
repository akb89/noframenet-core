import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const lemmaSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
  },
  lexemes: [{
    type: Number,
    ref: 'Lexeme',
  }],
});

export default mongoose.model('Lemma', lemmaSchema);
