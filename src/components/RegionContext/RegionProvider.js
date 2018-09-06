import React, { Component } from 'react';

import fetchRegion from './service';
import RegionContext from './RegionContext';

class RegionProvider extends Component {
  state = {
    region: {},
    updateRegion: this.updateRegion,
  };

  componentDidMount() {
    this.updateRegion();
  }

  updateRegion = () => {
    fetchRegion()
      .then((region) => {
        this.setState({ region })
      })
  }

  render() {
    const { children } = this.props;
    return <RegionContext.Provider value={this.state}>{children}</RegionContext.Provider>;
  }
}

export default RegionProvider;
