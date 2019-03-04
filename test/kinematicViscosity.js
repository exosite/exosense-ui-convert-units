var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['cSt to St'] = function () {
  var expected = 1e-2
    , actual = convert(1).from('cSt').to('St');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['cSt to m2/s'] = function () {
  var expected = 1e-6
    , actual = convert(1).from('cSt').to('m2/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['St to cSt'] = function () {
  var expected = 1e2
    , actual = convert(1).from('St').to('cSt');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['St to m2/s'] = function () {
  var expected = 1e-4
    , actual = convert(1).from('St').to('m2/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m2/s to cSt'] = function () {
  var expected = 1e6
    , actual = convert(1).from('m2/s').to('cSt');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m2/s to St'] = function () {
  var expected = 1e4
    , actual = convert(1).from('m2/s').to('St');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
