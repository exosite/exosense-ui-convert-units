var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['∆C to ∆K'] = function () {
  assert.strictEqual( convert(0).from('∆C').to('∆K'), 0);
};

tests['∆K to ∆C'] = function () {
  assert.strictEqual( convert(273.15).from('∆K').to('∆C'), 273.15);
};

tests['∆F to ∆C'] = function () {
  assert.strictEqual( convert(32).from('∆F').to('∆C'), 17.77777777777778);
};

tests['∆C to ∆F'] = function () {
  assert.strictEqual( convert(0).from('∆C').to('∆F'), 0);
};

tests['∆C to ∆R'] = function () {
  assert.strictEqual( convert(0).from('∆C').to('∆R'), 0);
};

tests['∆F to ∆K'] = function () {
  assert.strictEqual( convert(32).from('∆F').to('∆K'), 17.77777777777778);
};

tests['∆F to ∆R'] = function () {
  assert.strictEqual( convert(100).from('∆F').to('∆R'), 100.0);
};

tests['∆R to ∆F'] = function () {
  assert.strictEqual( convert(670).from('∆R').to('∆F'), 670);
};

tests['∆R to ∆C'] = function () {
  assert.strictEqual( convert(612).from('∆R').to('∆C'), 340);
};

tests['∆R to ∆K'] = function () {
  assert.strictEqual( convert(459.67).from('∆R').to('∆K'), 255.37222222222223);
};

module.exports = tests;
