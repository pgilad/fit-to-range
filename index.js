var isNumber = require('lodash.isnumber');
var isNumberNaN = require('lodash.isnan');

module.exports = function(num, lowerBound, upperBound) {
    if (!isNumber(num) || isNumberNaN(num)) {
        throw new TypeError('Expecting `num` to be a number');
    }

    if (!isNumber(lowerBound) || isNumberNaN(lowerBound)) {
        throw new TypeError('Expecting `lowerBound` to be a number');
    }

    if (num <= lowerBound) {
        return lowerBound;
    }

    if (!isNumber(upperBound) || isNumberNaN(upperBound)) {
        throw new TypeError('Expecting `upperBound` to be a number');
    }

    if (num >= upperBound) {
        return upperBound;
    }

    return num;
};
