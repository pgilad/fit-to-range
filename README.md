# fit-to-range
> Fit a number to a given range

[![NPM Version](http://img.shields.io/npm/v/fit-to-range.svg?style=flat)](https://npmjs.org/package/fit-to-range)
[![NPM Downloads](http://img.shields.io/npm/dm/fit-to-range.svg?style=flat)](https://npmjs.org/package/fit-to-range)
[![Build Status](http://img.shields.io/travis/pgilad/fit-to-range.svg?style=flat)](https://travis-ci.org/pgilad/fit-to-range)

Fits a number to a given range. The (simple) algorithm is:

1. If number is equal or lower than lower bound - return lower bound.
2. If number is equal or higher than upper bound - return upper bound.
3. Return number.

A valid number is any regular integer/float, +-`Infinity`. `NaN` is invalid.

## Installation

```sh
npm install --save fit-to-range
```

## Usage

`fitToRange(num, lowerBound, upperBound)`

```js
var fitToRange = require('fit-to-range');

var fitted;
fitted = fitToRange(5, 10, 20);
// => 10

fitted = fitToRange(25, 10, 20);
// => 20

fitted = fitToRange(0, -1, 1);
// => 0

fitted = fitToRange(1, -Infinity, 0);
// => 0

fitted = fitToRange(10.1, 0, Infinity);
// => 10.1
```

## License

MIT ©[Gilad Peleg](http://giladpeleg.com)
