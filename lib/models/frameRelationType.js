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

var frameRelationTypeSchema = _mongoose2.default.Schema({
  _id: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  },
  subFrameName: {
    type: String
  },
  supFrameName: {
    type: String
  }
});

exports.default = _mongoose2.default.model('FrameRelationType', frameRelationTypeSchema);