import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { firebaseDatabase, firebaseAuth } from './firebase';
import ArtistBox from './ArtistBox';
import CommentList from './CommentList';

export default class ArtistDetail extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      comments: [],
      userPhoto: '',
      uid: ''
    }
  }

  componentDidMount() {
    this.getArtistCommentstRef().on('child_added', this.addComment)
  }

  componentWillUnmount() {
    this.getArtistCommentstRef().off('child_added', this.addComment)
  }

  addComment = (data) => {
    const comment = data.val();
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }
  

  handleSend = () => {
    const { comment } = this.state;
    const { uid, photoURL } = firebaseAuth.currentUser;
    const artistCommentsRef = this.getArtistCommentstRef();

    var newCommentRef = artistCommentsRef.push();
    newCommentRef.set({
      comment,
      userPhoto: photoURL,
      uid
    });
    this.setState({ comment: '' });
  }

  handleChangeComment = (comment) => {
    this.setState({ comment });
  }

  getArtistCommentstRef = () => {
    const { id } = this.props.artist;
    return firebaseDatabase.ref(`comments/${id}`);
  }

  render() {
    const artist = this.props.artist;
    const { comments } = this.state;

    return (
      <View style={styles.container}> 
        <ArtistBox artist={artist} />

        <Text style={styles.headerComments}>Comentarios</Text>
        <CommentList comments={comments} />

        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.comment}
            style={styles.input}
            placeholder="Escribe aqui tu comentario!"
            onChangeText={this.handleChangeComment} />

          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={30} color="gray" />
          </TouchableOpacity> 
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
  inputContainer: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 50,
    flex: 1
  },
  headerComments: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical: 10
  }
});
