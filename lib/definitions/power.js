var power;

power = {
  W: {
    name: {
      singular: 'Watt'
    , plural: 'Watts'
    }
  , to_anchor: 1
  }
, mW: {
    name: {
      singular: 'Milliwatt'
      , plural: 'Milliwatts'
    }
    , to_anchor: .001
  }
, kW: {
    name: {
      singular: 'Kilowatt'
    , plural: 'Kilowatts'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megawatt'
    , plural: 'Megawatts'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigawatt'
    , plural: 'Gigawatts'
    }
  , to_anchor: 1000000000
  }
, μW: {
    name: {
      singular: 'Microwatt'
      , plural: 'Microwatt'
    }
    , to_anchor: 1E-6
  }
, VA: {
    name: {
      singular: 'Volt-Ampere'
    , plural: 'Volt-Amperes'
    }
  , to_anchor: 1
  }
, mVA: {
    name: {
      singular: 'Millivolt-Ampere'
      , plural: 'Millivolt-Amperes'
    }
    , to_anchor: .001
  }
, kVA: {
    name: {
      singular: 'Kilovolt-Ampere'
    , plural: 'Kilovolt-Amperes'
    }
  , to_anchor: 1000
  }
, MVA: {
    name: {
      singular: 'Megavolt-Ampere'
    , plural: 'Megavolt-Amperes'
    }
  , to_anchor: 1000000
  }
, GVA: {
    name: {
      singular: 'Gigavolt-Ampere'
    , plural: 'Gigavolt-Amperes'
    }
  , to_anchor: 1000000000
  }
, VAR: {
    name: {
      singular: 'Volt-Ampere Reactive'
    , plural: 'Volt-Amperes Reactive'
    }
  , to_anchor: 1
  }
, mVAR: {
    name: {
      singular: 'Millivolt-Ampere Reactive'
      , plural: 'Millivolt-Amperes Reactive'
    }
    , to_anchor: .001
  }
, kVAR: {
    name: {
      singular: 'Kilovolt-Ampere Reactive'
    , plural: 'Kilovolt-Amperes Reactive'
    }
  , to_anchor: 1000
  }
, MVAR: {
    name: {
      singular: 'Megavolt-Ampere Reactive'
    , plural: 'Megavolt-Amperes Reactive'
    }
  , to_anchor: 1000000
  }
, GVAR: {
    name: {
      singular: 'Gigavolt-Ampere Reactive'
    , plural: 'Gigavolt-Amperes Reactive'
    }
  , to_anchor: 1000000000
  }
, hp: {
  name: {
    singular: 'Horsepower'
    , plural: 'Horsepower'
  }
  , to_anchor: 745.7
}


};

module.exports = {
  metric: power
, _anchors: {
    metric: {
      unit: 'W'
    , ratio: 1
    }
  }
};
