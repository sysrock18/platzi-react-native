import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform
} from 'react-native';
import ArtistList from './ArtistList';

import getArtists from './api';

export default class Home extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      artists: null
    }
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({
        artists: data
      }));
  }

  render() {
    const artists = this.state.artists;

    return (
      <View style={styles.container}> 
        { artists ? 
          <ArtistList artists={artists} /> :
          <ActivityIndicator />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.select({
      ios: 30,
      android: 10
    })
  }
});
