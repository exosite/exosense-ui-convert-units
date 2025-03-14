var metric
  , imperial;

metric = {
  "∆C": {
    name: {
      singular: 'degree Celsius delta'
    , plural: 'degrees Celsius delta'
    }
  , to_anchor: 1
  , anchor_shift: 0
  },
  "∆K": {
    name: {
      singular: 'Kelvin delta'
    , plural: 'Kelvins delta'
    }
  , to_anchor: 1
  , anchor_shift: 0
  }
};

imperial = {
  "∆F": {
    name: {
      singular: 'degree Fahrenheit delta'
    , plural: 'degrees Fahrenheit delta'
    }
  , to_anchor: 1
  },
  "∆R": {
    name: {
      singular: 'degree Rankine delta'
    , plural: 'degrees Rankine delta'
    }
  , to_anchor: 1
  , anchor_shift: 0
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: '∆C'
    , transform: function (C) { return C / (5/9) }
    }
  , imperial: {
      unit: '∆F'
    , transform: function (F) { return F * (5/9) }
    }
  }
};

