'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

var frameRelationSchema = _mongoose2.default.Schema({
  _id: {
    type: Number,
    unique: true
  },
  subFrame: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Frame',
    index: true
  },
  supFrame: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Frame',
    index: true
  },
  type: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'FrameRelationType',
    index: true
  }
});

// TODO: Refactor this
/*
const frameRelationSchema = mongoose.Schema({
  type: {
    type: String,
    index: true,
  },
  frames: [{
    type: Number,
    ref: 'Frame',
  }],
});
*/
frameRelationSchema.index({
  frames: 1
});

exports.default = _mongoose2.default.model('FrameRelation', frameRelationSchema);