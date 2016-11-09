'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

require('./valenceUnit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

var patternSchema = _mongoose2.default.Schema({
  valenceUnits: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'ValenceUnit'
  }]
});

patternSchema.index({
  valenceUnits: 1
});

exports.default = _mongoose2.default.model('Pattern', patternSchema);