'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fastSet = require('collections/fast-set');

var _fastSet2 = _interopRequireDefault(_fastSet);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /****************************************************************
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Utility classes to define custom 'Set' objects extending     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * collections/fast-set to handle FrameNet object comparison    *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ****************************************************************/


/**
 * Custom hashCode method on String.prototype
 */
if (!String.prototype.hashCode) {
  String.prototype.hashCode = function () {
    var hash = 0;
    if (undefined.length === 0) return hash;
    for (var i = 0; i < undefined.length; i += 1) {
      var chr = undefined.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };
}

/**
 * An equals method performing a Mongoose _id.equals comparison if _id is of
 * type ObjectId and a standard === comparisong otherwise.
 * @method equals
 * @param  {[type]} a a given Mongoose object with an _id attribute
 * @param  {[type]} b a given Mongoose object with an _id attribute
 * @return {[boolean]} true if a and b have the same _id, false
 * otherwise
 */
function equals(a, b) {
  return a._id instanceof _mongoose2.default.Types.ObjectId ? a._id.equals(b._id) : a._id === b._id;
}

/**
 * A custom hashcode for {@link Set}
 * @method hashCode
 * @param  {[type]} object a given Mongoose object with an _id
 * attribute
 * @return {[String]} stringified _id
 */
function hashCode(object) {
  return object._id.toString();
}

/**
 * A Set of (Mongoose) objects extending collectionjs/FastSet.
 */

var Set = function (_FastSet) {
  _inherits(Set, _FastSet);

  function Set(collection) {
    _classCallCheck(this, Set);

    return _possibleConstructorReturn(this, (Set.__proto__ || Object.getPrototypeOf(Set)).call(this, collection, equals, hashCode));
  }

  return Set;
}(_fastSet2.default);

exports.default = Set;