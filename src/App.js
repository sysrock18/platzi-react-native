import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import ArtistList from './ArtistList';

export default class App extends Component<{}> {
  render() {
    const artist = {
      image: 'http://www.gamba.fm/wp/wp-content/uploads/2017/07/Linkin-park.jpg',
      name: 'Linkin Park',
      likes: 51,
      comments: 23
    };

    const artists = Array(30).fill(artist);

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
