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
      singular: 'Metre per second squared'
      , plural: 'Metres per second squared'
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
  'in/s2': {
    name: {
      singular: 'Inches per second squared'
      , plural: 'Inches per second squared'
    }
    , to_anchor: 1
  }
};

module.exports = {
  metric: metric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'g-force'
      , ratio: 386.09
    }
  , imperial: {
      unit: 'in/s2'
      , ratio: 1/386.09
    }
  }
};

