import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDvBMfM74mwQXoJpEwTWn-la8HAf39AuzI',
  authDomain: 'simonmusic-1d3ae.firebaseapp.com',
  databaseURL: 'https://simonmusic-1d3ae.firebaseio.com',
  projectId: 'simonmusic-1d3ae',
  storageBucket: 'simonmusic-1d3ae.appspot.com',
  messagingSenderId: '243491725963'
};
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase;
