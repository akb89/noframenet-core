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

var frameElementRelationSchema = _mongoose2.default.Schema({
  _id: {
    type: Number,
    unique: true
  },
  subFE: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'FrameElement',
    index: true
  },
  supFE: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'FrameElement',
    index: true
  },
  frameRelation: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'FrameRelation',
    index: true
  }
});

// TODO: Refactor this
/*
const frameElementRelationSchema = mongoose.Schema({
  type: {
    type: String,
    index: true,
  },
  frameElements: [{
    type: Number,
    ref: 'FrameElement',
  }],
});
*/
frameElementRelationSchema.index({
  frameElements: 1
});

exports.default = _mongoose2.default.model('FERelation', frameElementRelationSchema);