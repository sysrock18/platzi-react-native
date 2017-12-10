import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import Comment from './Comment';

export default class CommentList extends Component<{}> {

  render() {
    return (
      <FlatList
        data={this.props.comments}
        renderItem={({item}) => {
          return (
            <Comment comment={item.comment} avatar={item.userPhoto} />
          )
        }}
      />
    );
  }
}
