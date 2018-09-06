import React from 'react';

const RegionContext = React.createContext({
  region: {},
  updateRegion: () => {}
});

export default RegionContext;
