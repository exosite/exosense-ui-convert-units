var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['pa-s to mpa-s'] = function () {
  var expected = 100
    , actual = convert(1).from('pa-s').to('mpa-s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['pa-s to P'] = function () {
  var expected = 10
    , actual = convert(1).from('pa-s').to('P');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mpa-s to pa-s'] = function () {
  var expected = 0.01
    , actual = convert(1).from('mpa-s').to('pa-s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mpa-s to P'] = function () {
  var expected = .1
    , actual = convert(1).from('mpa-s').to('P');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['P to pa-s'] = function () {
  var expected = .1
    , actual = convert(1).from('P').to('pa-s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['P to mpa-s'] = function () {
  var expected = 10
    , actual = convert(1).from('P').to('mpa-s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
