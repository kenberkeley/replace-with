/**
 * Replace an array|object's content with the other one's while keeping the reference
 * @param  {Array|Object} orig
 * @param  {Array|Object} other
 * @return {Array|Object} orig
 */
var keys = Object.keys;

module.exports = function replaceWith(orig, other) {
  if (Array.isArray(orig)) {
    // for Array
    orig.splice.apply(orig, [0, orig.length].concat(other));
  } else {
    // for Object
    keys(orig).forEach(function (k) { delete orig[k] });
    keys(other).forEach(function (k) { orig[k] = other[k] });
  }
  return orig;
};
