import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from './Home';
import ArtistDetail from './ArtistDetail';
import Login from './Login';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="loginScreen"
	          component={Login}
	          hideNavBar={true}
	          initial={true}
	        />
          <Scene key="home" component={Home} hideNavBar={true} />
          <Scene key="artistDetail" component={ArtistDetail} title="Comentarios" />
        </Stack>
      </Router>
    );
  }
}
