'use strict'

function hash (str) {
  return str
    .split('')
    .reduce((hash, char) =>
      (hash << 6) + (hash << 16) - hash + char.charCodeAt(0),
    0)
}

function hashMax (str, max) {
  return (hash(str) % max + max) % max
}

module.exports = hashMax
