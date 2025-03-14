var metric
  , imperial;

metric = {
  'g-force': {
    name: {
      singular: 'g-force'
      , plural: 'g-forces'
    }
    , to_anchor: 9.80665
  }
  , 'm/s2': {
    name: {
      singular: 'Meter per second squared'
      , plural: 'Meters per second squared'
    }
    , to_anchor: 1
  }
  , 'mm/s2': {
    name: {
      singular: 'Millimetres per second squared'
      , plural: 'Millimetres per second squared'
    }
    , to_anchor: .001
  }
};

imperial = {
  'ft/s2': {
    name: {
      singular: 'ft/s2'
      , plural: 'ft/s2'
    }
    , to_anchor: 1
  }
  , 'in/s2': {
    name: {
      singular: 'in/s2'
      , plural: 'in/s2'
    }
    , to_anchor: 0.08333333333333333
  }
  , 'ft/m2': {
    name: {
      singular: 'ft/m2'
    , plural: 'ft/m2'
    }
  , to_anchor: 0.00027777777777778
  }
}

module.exports = {
  metric: metric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'm/s2'
      , ratio: 3.28084
    }
    , imperial: {
      unit: 'ft/s2'
    , ratio: 1/3.28084
    }
  }
};
