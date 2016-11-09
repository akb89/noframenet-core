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

var annoSetSchema = _mongoose2.default.Schema({
  _id: {
    type: Number,
    unique: true
  },
  sentence: {
    type: Number,
    ref: 'Sentence',
    index: true
  },
  lexUnit: {
    type: Number,
    ref: 'LexUnit',
    index: true
  },
  pattern: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Pattern',
    index: true
  },
  labels: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Label'
  }]
});

exports.default = _mongoose2.default.model('AnnotationSet', annoSetSchema);