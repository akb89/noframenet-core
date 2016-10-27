'use strict';

import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameRelationSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
  },
  subFrame: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Frame',
    index: true,
  },
  supFrame: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Frame',
    index: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FrameRelationType',
    index: true,
  },
});

// TODO: Refactor this
const frameRelationSchema = mongoose.Schema({
  type: {
    type: String,
    index: true
  },
  frames: [{
    type: Number,
    ref: 'Frame'
  }],
});

frameRelationSchema.index({
  frames: 1
});

export default mongoose.model('FrameRelation', frameRelationSchema);
