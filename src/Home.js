import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import ArtistList from './ArtistList';

import getArtists from './api';

export default class Home extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
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
        <ArtistList artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  }
});
