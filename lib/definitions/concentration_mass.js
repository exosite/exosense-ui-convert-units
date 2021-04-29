var metric
  , imperial;

metric = {
  'kg/m3': {
    name: {
      singular: 'Kilogram per Meter Cubed'
      , plural: 'Kilogram per Meter Cubed'
    }
    , to_anchor: 1
  }
, 'g/cm3': {
    name: {
      singular: 'Gram per Centimeter Cubed'
      , plural: 'Gram per Centimeter Cubed'
    }
    , to_anchor: 1000
  }
, 'g/L': {
    name: {
      singular: 'Gram per Liter'
      , plural: 'Gram per Liter'
    }
    , to_anchor: 1
  }
, 'mg/L': {
    name: {
      singular: 'Milligram per Liter'
      , plural: 'Milligram per Liter'
    }
    , to_anchor: 1/1000
  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'kg/m3'
      , ratio: 1
    }
  }
};
