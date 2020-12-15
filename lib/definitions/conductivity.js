var metric
  , imperial;

metric = {
  'S/m': {
    name: {
      singular: 'Siemens per Meter'
      , plural: 'Siemens per Meter'
    }
    , to_anchor: 1
  }
, 'dS/m': {
    name: {
      singular: 'Decisiemens per Meter'
      , plural: 'Decisiemens per Meter'
    }
    , to_anchor: 1/10
  }
, 'mS/m': {
    name: {
      singular: 'Millisiemens per Meter'
      , plural: 'Millisiemens per Meter'
    }
    , to_anchor: 1/1000
  }
, 'μS/m': {
    name: {
      singular: 'Microsiemens per Meter'
      , plural: 'Microsiemens per Meter'
    }
    , to_anchor: 1/1000000
  }
, 'mS/cm': {
    name: {
      singular: 'Millisiemens per Centimeter'
      , plural: 'Millisiemens per Centimeter'
    }
    , to_anchor: 1/10
  }
, 'µS/cm': {
    name: {
      singular: 'Microsiemens per Centimeter'
      , plural: 'Microsiemens per Centimeter'
    }
    , to_anchor: 1/10000
  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'S/m'
      , ratio: 1
    }
  }
};
