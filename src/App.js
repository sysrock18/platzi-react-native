import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from './Home';
import ArtistDetail from './ArtistDetail';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar={true} />
          <Scene key="artistDetail" component={ArtistDetail} />
        </Stack>
      </Router>
    );
  }
}
