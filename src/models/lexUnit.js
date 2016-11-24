import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const lexUnitSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    index: true,
  },
  pos: {
    type: String,
    index: true,
  },
  definition: {
    type: String,
  },
  lemmaID: {
    type: Number,
  },
  frame: {
    type: Number,
    ref: 'Frame',
    index: true,
  },
  status: {
    type: String,
    index: true,
  },
  cBy: {
    type: String,
  },
  cDate: {
    type: String,
  },
  lexemes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lexeme',
  }],
  semTypes: [{
    type: Number,
    ref: 'SemType',
  }],
});

lexUnitSchema.index({
  semTypes: 1,
});

export default mongoose.model('LexUnit', lexUnitSchema);
