import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    const artist = {
      image: 'http://www.gamba.fm/wp/wp-content/uploads/2017/07/Linkin-park.jpg',
      name: 'Linkin Park',
      likes: 51,
      comments: 23
    };

    return (
      <ScrollView style={styles.container}>
      {
        Array(8).fill(artist).map(artist => {
          return <ArtistBox artist={artist} />
        })
      }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  }
});
