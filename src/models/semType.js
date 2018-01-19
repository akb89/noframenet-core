import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const semTypeSchema = mongoose.Schema({
  _id: {
    type: Number,
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
  }],
});

semTypeSchema.index({
  superTypes: 1,
});

export default mongoose.model('SemType', semTypeSchema);
