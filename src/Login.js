import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class Login extends Component<{}> {
  constructor(props) {
    super(props);
  }

  handleLogin = (error, result) => {
    if (error) {
      console.error(error);
    } else if (result.isCancelled) {
      alert("Login is cancelled");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          // alert(data.accessToken.toString());
          Actions.home();
        }
      )
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a SimonMusic</Text>

        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLogin}
          onLogoutFinished={() => alert("Logout")} />
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
