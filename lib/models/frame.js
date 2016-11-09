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

var frameSchema = _mongoose2.default.Schema({
  _id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    index: true
  },
  definition: {
    type: String
  },
  cDate: {
    type: String
  },
  cBy: {
    type: String
  },
  frameElements: [{
    type: Number,
    ref: 'FrameElement'
  }],
  feCoreSets: [[{
    type: Number,
    ref: 'FrameElement'
  }]],
  frameRelations: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'FrameRelation'
  }],
  lexUnits: [{
    type: Number,
    ref: 'LexUnit'
  }],
  semTypes: [{
    type: Number,
    ref: 'SemType'
  }]
});

frameSchema.index({
  frameElements: 1
});
frameSchema.index({
  feCoreSets: 1
});
frameSchema.index({
  frameRelations: 1
});
frameSchema.index({
  semTypes: 1
});
// No index on lexUnits as a lexUnit is frame-specific

exports.default = _mongoose2.default.model('Frame', frameSchema);