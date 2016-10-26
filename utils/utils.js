'use strict';

/****************************************************************
 * Utility classes to define custom 'Set' objects extending     *
 * collections/fast-set to handle FrameNet object comparison    *
 ****************************************************************/
import FastSet from 'collections/fast-set';

/**
 * Custom hashCode method on String.prototype
 */
if (!String.prototype.hashCode) {
  String.prototype.hashCode = () => {
    // return jenkins.oaat(this);
    // return jenkins.lookup2(this);
    // return murmur.murmur3(this, 42);
    // return murmur.murmur2(this, 42);
    // return murmur3.hash128(this).raw();
    // Tried all of the above but below is the fastest
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

function equals(a, b) {
  return a._id.equals(b._id);
}

function hashCode(object) {
  return object._id.toString();
}

/**
 * A Set of (Mongoose) objects. Equals and hashcode are based on the
 * _id parameter and the Mongoose equals method
 */
export class Set extends FastSet { // FIXME: export default class
  constructor(collection) {
    super(collection, equals, hashCode);
  }
}
