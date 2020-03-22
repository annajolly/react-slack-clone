import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database"
import "firebase/storage"


var config = {
  apiKey: "API_KEY",
  authDomain: "react-slack-clone-a4030.firebaseapp.com",
  databaseURL: "https://react-slack-clone-a4030.firebaseio.com",
  projectId: "react-slack-clone-a4030",
  storageBucket: "react-slack-clone-a4030.appspot.com",
  messagingSenderId: "1047846985812",
  appId: "1:1047846985812:web:d3cc5f0158af8f05"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;