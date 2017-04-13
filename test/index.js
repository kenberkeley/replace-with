import test from 'ava'
import replaceWith from '../'

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
