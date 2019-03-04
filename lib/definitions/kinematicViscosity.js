var metric

metric = {
  'cSt': {
    name: {
      singular: 'centiStoke'
    , plural: 'centiStoke'
    }
  , to_anchor: .01
  }
, 'St': {
    name: {
      singular: 'Stokes'
    , plural: 'millipascal-seconds'
    }
  , to_anchor: 1
  }
, 'm2/s': {
    name: {
      singular: 'meter2/s'
    , plural: 'meters2/s'
    }
  , to_anchor: 1/.0001
  }
}

module.exports = {
  metric: metric
, _anchors: {
    metric: {
      unit: 'St'
    , ratio: 1
    },
  }
};

