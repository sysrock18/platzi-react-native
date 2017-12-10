import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';

const DEFAULT_AVATAR = 'http://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg';
const AVATAR_SIZE = 32;

const Comment = (props) => 
  <View style={styles.comment}>
    {
      props.avatar ?
      <Image style={styles.avatar} source={{ uri: props.avatar }} /> :
      <Image style={styles.avatar} source={{ uri: DEFAULT_AVATAR }} />
    }
    <Text style={styles.text}>{props.comment}</Text>
  </View>

const styles = StyleSheet.create({
  comment: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginLeft: 10
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2
  }
});

export default Comment;