'use strict';

import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

const frameElementRelationSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: true
  },
  subFE: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FrameElement',
    index: true,
  },
  supFE: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FrameElement',
    index: true,
  },
  frameRelation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FrameRelation',
    index: true,
  },
});

// TODO: Refactor this
const frameElementRelationSchema = mongoose.Schema({
  type: {
    type: String,
    index: true
  },
  frameElements: [{
    type: Number,
    ref: 'FrameElement'
  }],
});

frameElementRelationSchema.index({
  frameElements: 1
});

export default mongoose.model('FERelation', frameElementRelationSchema);
