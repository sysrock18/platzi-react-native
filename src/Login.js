import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase, { firebaseAuth } from './firebase';

const { FacebookAuthProvider } = firebase.auth;

export default class Login extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        const { accessToken } = data;
        const credential = FacebookAuthProvider.credential(accessToken);
        firebaseAuth.signInWithCredential(credential).then(
          (user) => {
            Actions.home();
          },
          (error) => {
            console.error(error);
          }
        )
      }
    )
  }

  handleLogin = (error, result) => {
    if (error) {
      console.error(error);
    } else if (result.isCancelled) {
      alert('Login is cancelled');
    } else {
      this.authenticateUser();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a SimonMusic</Text>

        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLogin}
          onLogoutFinished={() => alert('Logout')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20
  }
});
