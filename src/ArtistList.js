import React, { Component } from 'react';
import {
  FlatList,
  TouchableOpacity
} from 'react-native';
import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component<{}> {
  handlePress(artist) {
    Actions.artistDetail({ artist });
  }

  render() {
    return (
      <FlatList
        data={this.props.artists}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => this.handlePress(item)}>
              <ArtistBox artist={item} />
            </TouchableOpacity>
          )
        }}
      />
    );
  }
}
