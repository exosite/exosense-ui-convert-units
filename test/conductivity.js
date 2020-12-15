var convert = require('../lib')
  , assert = require('assert')
  , tests = {};


tests['S/m to dS/m'] = function () {
  assert.strictEqual( convert(1).from('S/m').to('dS/m') , 10);
};

tests['dS/m to S/m'] = function () {
  assert.strictEqual( convert(1).from('dS/m').to('S/m') , 1/10);
};

tests['S/m to mS/m'] = function () {
  assert.strictEqual( convert(1).from('S/m').to('mS/m') , 1000);
};

tests['mS/m to S/m'] = function () {
  assert.strictEqual( convert(1).from('mS/m').to('S/m') , 1/1000);
};

tests['S/m to μS/m'] = function () {
  assert.strictEqual( convert(1).from('S/m').to('μS/m') , 1000000);
};

tests['μS/m to S/m'] = function () {
  assert.strictEqual( convert(1).from('μS/m').to('S/m') , 1/1000000);
};

tests['S/m to mS/cm'] = function () {
  assert.strictEqual( convert(1).from('S/m').to('mS/cm') , 10);
};

tests['mS/cm to S/m'] = function () {
  assert.strictEqual( convert(1).from('mS/cm').to('S/m') , 1/10);
};

tests['S/m to µS/cm'] = function () {
  assert.strictEqual( convert(1).from('S/m').to('µS/cm') , 10000);
};

tests['µS/cm to S/m'] = function () {
  assert.strictEqual( convert(1).from('µS/cm').to('S/m') , 1/10000);
};

module.exports = tests;
