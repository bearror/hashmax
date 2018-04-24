# ▶ hashmax

[![Build Status](https://travis-ci.org/bearror/oletus.svg?branch=master)](https://travis-ci.org/bearror/oletus)

Hashes a string to an integer in the range of `[0..max]`.

## Usage

Install it with npm:
```bash
npm install --save hashmax
```
Load the package to your application:
```js
const hashmax = require('hashmax')
```
And call it with your data:
```js
const magicInt = hashmax('Hello, World!', 256) // => 21
```

## API

### `(string, integer) -> integer`

## Author

Joonatan Vuorinen ([@bearror](https://twitter.com/bearror))
