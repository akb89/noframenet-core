import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameHierarchySchema = mongoose.Schema({
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
});

export default mongoose.model('FrameHierarchy', frameHierarchySchema);
