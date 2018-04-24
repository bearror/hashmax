const hashmax = require('./index')
const assert = require('assert')

assert.equal(hashmax('hello, world', 42), 12)
assert.equal(hashmax('hello, world.', 42), 26)
assert.equal(hashmax('hello, world!', 42), 13)
assert.equal(hashmax('hello, world?', 42), 1)
assert.equal(hashmax('hello, word', 42), 16)
assert.equal(hashmax('hell, world', 42), 5)
