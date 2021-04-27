var convert = require('../lib')
  , assert = require('assert')
  , tests = {};


tests['kg/m3 to g/cm3'] = function () {
  assert.strictEqual( convert(1).from('kg/m3').to('g/cm3') , 1/1000);
};

tests['g/cm3 to kg/m3'] = function () {
  assert.strictEqual( convert(1).from('g/cm3').to('kg/m3') , 1000);
};

tests['kg/m3 to g/L'] = function () {
  assert.strictEqual( convert(1).from('kg/m3').to('g/L') , 1);
};

tests['g/L to kg/m3'] = function () {
  assert.strictEqual( convert(1).from('g/L').to('kg/m3') , 1);
};

tests['kg/m3 to mg/L'] = function () {
  assert.strictEqual( convert(1).from('kg/m3').to('mg/L') , 1000);
};

tests['mg/L to kg/m3'] = function () {
  assert.strictEqual( convert(1).from('mg/L').to('kg/m3') , 1/1000);
};

module.exports = tests;
