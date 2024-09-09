var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['measures'] = function () {
  var actual = convert().measures()
    , expected = [ 
      'acceleration',
      'angle',
      'angularVelocity',
      'apparentPower',
      'area',
      'capacitance',
      'charge',
      'concentrationMass',
      'conductivity',
      'current',
      'digital',
      'dynamicViscosity',
      'each',
      'energy',
      'flowMass',
      'force',
      'frequency',
      'illuminance',
      'kinematicViscosity',
      'length',
      'mass',
      'pace',
      'partsPer',
      'power',
      'pressure',
      'reactiveEnergy',
      'reactivePower',
      'resistance',
      'speed',
      'temperature',
      'temperatureDelta',
      'time',
      'torque',
      'voltage',
      'volume',
      'volumeFlowRate'
     ];

    console.log(JSON.stringify(actual.sort()));
    console.log(JSON.stringify(expected.sort()));
  assert.equal(actual.length, expected.length);
  assert.deepEqual(actual, expected);
};

module.exports = tests;
