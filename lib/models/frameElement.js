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

var frameElementSchema = _mongoose2.default.Schema({
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
  coreType: {
    type: String
  },
  cDate: {
    type: String
  },
  cBy: {
    type: String
  },
  fgColor: {
    type: String
  },
  bgColor: {
    type: String
  },
  abbrev: {
    type: String,
    index: true
  },
  feRelations: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'FERelation'
  }],
  semTypes: [{
    type: Number,
    ref: 'SemType'
  }]
});

frameElementSchema.index({
  feRelations: 1
});
frameElementSchema.index({
  semTypes: 1
});

exports.default = _mongoose2.default.model('FrameElement', frameElementSchema);