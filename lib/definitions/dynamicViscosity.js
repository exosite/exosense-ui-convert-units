var metric

metric = {
  'pa-s': {
    name: {
      singular: 'pascal-second'
    , plural: 'pascal-seconds'
    }
  , to_anchor: 1
  }
, 'mpa-s': {
    name: {
      singular: 'millipascal-second'
    , plural: 'millipascal-seconds'
    }
  , to_anchor: .01
  }
, 'P': {
    name: {
      singular: 'poise'
    , plural: 'poises'
    }
  , to_anchor: .1
  }
}

module.exports = {
  metric: metric
, _anchors: {
    metric: {
      unit: 'pa-s'
    , ratio: 1
    },
  }
};

