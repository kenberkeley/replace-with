# replaceWith(orig `<Array|Object>`, other `<Array|Object>`)

[![npm version][npm-v-img]][npm-url]
[![npm download][npm-dl-img]][npm-url]
[![build][build-img]][build-url]

### Installation

`npm i replace-with -S`  

### Source ([index.js](./index.js))

```js
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
```


### Usage
> Let's take a look at the [test examples](./test/index.js)

```js
test('replace array', t => {
  const orig = [1, 2, 3]
  const ref = orig
  replaceWith(orig, [4, 5, 6])
  t.is(ref, orig) // pass!
  t.deepEqual(orig, [4, 5, 6]) // pass!
})

test('replace object', t => {
  let orig = { a: 1, b: 2, c: 3 }
  const ref = orig
  orig = replaceWith(orig, { d: 4, e: 5, f: 6 })
  t.is(ref, orig) // pass!
  t.deepEqual(orig, { d: 4, e: 5, f: 6 }) // pass!
})
```

### Test

`npm test`

[npm-url]: https://www.npmjs.com/package/replace-with
[npm-v-img]: http://img.shields.io/npm/v/replace-with.svg
[npm-dl-img]: http://img.shields.io/npm/dm/replace-with.svg
[build-img]: https://travis-ci.org/kenberkeley/replace-with.svg?branch=master
[build-url]: https://travis-ci.org/kenberkeley/replace-with
