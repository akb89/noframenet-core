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

var valenceUnitSchema = _mongoose2.default.Schema({
  FE: {
    type: String,
    index: true
  },
  PT: {
    type: String,
    index: true
  },
  GF: {
    type: String,
    index: true
  }
});
valenceUnitSchema.index({
  FE: 1,
  PT: 1,
  GF: 1
}, {
  unique: true
});

exports.default = _mongoose2.default.model('ValenceUnit', valenceUnitSchema);