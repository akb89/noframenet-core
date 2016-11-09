/****************************************************************
 * Utility classes to define custom 'Set' objects extending     *
 * collections/fast-set to handle FrameNet object comparison    *
 ****************************************************************/
import FastSet from 'collections/fast-set';
import mongoose from 'mongoose';

/**
 * Custom hashCode method on String.prototype
 */
if (!String.prototype.hashCode) {
  String.prototype.hashCode = () => {
    let hash = 0;
    if (this.length === 0) return hash;
    for (let i = 0; i < this.length; i += 1) {
      const chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
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
  return a._id instanceof mongoose.Types.ObjectId ? a._id.equals(b._id) : a._id === b._id;
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
class Set extends FastSet {
  constructor(collection) {
    super(collection, equals, hashCode);
  }
}

export default Set;
