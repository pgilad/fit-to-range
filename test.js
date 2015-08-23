var test = require('tape');
var fitToRange = require('./index');

test('throws on non number `num` argument', function (t) {
    t.throws(function () {
        fitToRange();
    });
    t.throws(function () {
        fitToRange(null);
    });
    t.throws(function () {
        fitToRange(NaN);
    });
    t.throws(function () {
        fitToRange('hello');
    });
    t.end();
});

test('throws on non number `lowerBound` argument', function (t) {
    t.throws(function () {
        fitToRange(5);
    });
    t.throws(function () {
        fitToRange(5, null);
    });
    t.throws(function () {
        fitToRange(5, NaN);
    });
    t.throws(function () {
        fitToRange(5, 'hello');
    });
    t.end();
});

test('returns the `lowerBound` when relevant', function (t) {
    t.equal(fitToRange(5, 10), 10);
    t.equal(fitToRange(-Infinity, 10), 10);
    t.equal(fitToRange(-10, -10), -10);
    t.equal(fitToRange(-10, -9), -9);
    t.equal(fitToRange(0, Infinity), Infinity);
    t.equal(fitToRange(-Infinity, -Infinity, Infinity), -Infinity);
    t.end();
});

test('throws on non number `upperBound` argument', function (t) {
    t.throws(function () {
        fitToRange(5, 0);
    });
    t.throws(function () {
        fitToRange(5, 0, null);
    });
    t.throws(function () {
        fitToRange(5, 0, NaN);
    });
    t.throws(function () {
        fitToRange(5, 0, 'hello');
    });
    t.end();
});

test('returns the `upperBound` when relevant', function (t) {
    t.equal(fitToRange(15, 0, 10), 10);
    t.equal(fitToRange(Infinity, 0, 10), 10);
    t.equal(fitToRange(Infinity, 0, Infinity), Infinity);
    t.equal(fitToRange(15, 0, 15), 15);
    t.equal(fitToRange(-15, -20, -15), -15);
    t.equal(fitToRange(0, -Infinity, 0), 0);
    t.equal(fitToRange(Infinity, -Infinity, Infinity), Infinity);
    t.end();
});

test('returns the `num` when relevant', function (t) {
    t.equal(fitToRange(5, 0, 10), 5);
    t.equal(fitToRange(5, -10, 20), 5);
    t.equal(fitToRange(5, -Infinity, Infinity), 5);
    t.equal(fitToRange(5, -Infinity, 10), 5);
    t.equal(fitToRange(5, 0, Infinity), 5);
    t.equal(fitToRange(0.1, 0, 1), 0.1);
    t.end();
});
