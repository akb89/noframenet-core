import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const semTypeModelSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    index: true,
  },
  definition: {
    type: String,
  },
  superTypes: [{
    type: Number,
    ref: 'SemType',
    index: true,
  }],
});

export default mongoose.model('SemType', semTypeModelSchema);
