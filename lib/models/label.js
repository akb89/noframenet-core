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

var labelSchema = _mongoose2.default.Schema({
  name: {
    type: String,
    index: true
  },
  type: {
    type: String,
    index: true
  },
  startPos: {
    type: Number
  },
  endPos: {
    type: Number
  }
});

exports.default = _mongoose2.default.model('Label', labelSchema);