import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const feHierarchySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  parents: [{
    type: mongoose.Schema.Types.Mixed,
  }],
  children: [{
    type: mongoose.Schema.Types.Mixed,
  }],
}, {
  collation: {
    locale: 'en_US',
    strength: 1,
  },
});

export default mongoose.model('FEHierarchy', feHierarchySchema);
