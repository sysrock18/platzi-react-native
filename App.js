/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    const image = 'http://www.gamba.fm/wp/wp-content/uploads/2017/07/Linkin-park.jpg';
    const name = 'Linkin Park';
    const likes = 11;
    const comments = 23;

    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: image}} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30} color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  image: {
    width: 150,
    height: 150
  },
  artistBox: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
});
