import mongoose from 'mongoose';
import bluebird from 'bluebird';
import './valenceUnit';

mongoose.Promise = bluebird;

const patternSchema = mongoose.Schema({
  valenceUnits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ValenceUnit',
  }],
});

patternSchema.index({
  valenceUnits: 1,
});

export default mongoose.model('Pattern', patternSchema);
