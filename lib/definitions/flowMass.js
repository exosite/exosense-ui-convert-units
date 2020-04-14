var metric
var imperial

metric = {
  'kg/s': {
    name: {
      singular: 'kilogram per second'
    , plural: 'kilograms per seconds'
    }
  , to_anchor: 1
  }
}

imperial = {
  'lbs/s': {
  name: {
    singular: 'Lb per second'
  , plural: 'lbs per seconds'
  }
  , to_anchor: 1
  }
}


module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kg/s'
    , ratio: 2.20462
    },
    imperial: {
      unit: 'lbs/s'
    , ratio: 0.453592
    }
  }
};

