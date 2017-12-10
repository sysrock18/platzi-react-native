import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { firebaseDatabase, firebaseAuth } from './firebase';

export default class ArtistBox extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      likeCount: 0
    };
  }

  componentWillMount() {
    const { uid } = firebaseAuth.currentUser;

    this.getArtistRef().on('value', snapshot => {
      const artist = snapshot.val();
      if (artist) {
        this.setState({
          likeCount: artist.likeCount,
          liked: artist.likes && artist.likes[uid]
        });
      }
    });
  }
  
  handleLike = () => {
    this.toggleLike(!this.state.liked);
  }

  getArtistRef = () => {
    const { id } = this.props.artist;

    return firebaseDatabase.ref(`artist/${id}`);
  }

  toggleLike = (liked) => {
    const { uid } = firebaseAuth.currentUser;

    this.getArtistRef().transaction((artist) => {
      if (artist) {
        if (artist.likes && artist.likes[uid]) {
          artist.likeCount--;
          artist.likes[uid] = null;
        } else {
          artist.likeCount++;
          if (!artist.likes) {
            artist.likes = {};
          }
          artist.likes[uid] = true;
        }
      }
      return artist || {
        likeCount: 1,
        likes: {
          [uid]: true
        }
      };
    });
  }

  render() {
    const { image, name, likes, comments } = this.props.artist;

    const likeIcon = this.state.liked ?
      <Icon name="ios-heart" size={30} color="#e74c3c" />
      : <Icon name="ios-heart-outline" size={30} color="gray" />;

    const { likeCount } = this.state;

    return (
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={this.handleLike}>
                { likeIcon }
              </TouchableOpacity>
              <Text style={styles.count}>{likeCount}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="gray" />
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  artistBox: {
    margin: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 4
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
