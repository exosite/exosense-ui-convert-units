var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['kg/s to lbs/s'] = function () {
  var expected = 2.20462
    , actual = convert(1).from('kg/s').to('lbs/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['lbs/s to kg/s'] = function () {
  var expected = 0.453592
    , actual = convert(1).from('lbs/s').to('kg/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};


module.exports = tests;
