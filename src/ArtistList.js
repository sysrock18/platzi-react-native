import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistList extends Component<{}> {
  render() {
    return (
      <FlatList
        data={this.props.artists}
        renderItem={({item}) => <ArtistBox artist={item} />}
      />
    );
  }
}
