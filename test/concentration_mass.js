var convert = require('../lib')
  , assert = require('assert')
  , percentError = require('../lib/percentError')
  , ACCURACY = 0.000001
  , tests = {};

const conversions = [
  { from: 'kg/m3', to: 'g/cm3', value: 1, expected: 1/1000 },
  { from: 'kg/m3', to: 'g/L', value: 1, expected: 1 },
  { from: 'kg/m3', to: 'mg/L', value: 1, expected: 1000 },
  { from: 'kg/m3', to: 'mg/m3', value: 1, expected: 1000000 },
  { from: 'kg/m3', to: 'µg/m3', value: 1, expected: 1000000000 },
  { from: 'kg/m3', to: 'µg/L', value: 1, expected: 1000000 },
]

conversions.map(({ from, to, value, expected }) => {
  tests[`${from} to ${to}`] = () => {
    actual = convert(value).from(from).to(to)
    assert.ok(percentError(expected, actual) < ACCURACY)
  }
  tests[`${to} to ${from}`] = () => {
    actual = convert(expected).from(to).to(from)
    assert.ok(percentError(actual, value) < ACCURACY)
  }
})

module.exports = tests;
