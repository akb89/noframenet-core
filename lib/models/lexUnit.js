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

var lexUnitSchema = _mongoose2.default.Schema({
  _id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    index: true
  },
  pos: {
    type: String,
    index: true
  },
  definition: {
    type: String
  },
  frame: {
    type: Number,
    ref: 'Frame',
    index: true
  },
  status: {
    type: String,
    index: true
  },
  totalAnnotated: {
    type: Number,
    index: true
  },
  lemma_id: {
    type: Number,
    index: true
  },
  lexemes: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Lexeme'
  }],
  semTypes: [{
    type: Number,
    ref: 'SemType'
  }]
});

lexUnitSchema.index({
  lexemes: 1
});
lexUnitSchema.index({
  semTypes: 1
});

exports.default = _mongoose2.default.model('LexUnit', lexUnitSchema);