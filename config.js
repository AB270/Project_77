import firebase from 'firebase'
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBejW5_5Jma08_ifPeqJjPcy5MBJ6Ma4tw",
    authDomain: "barter-app-88ad0.firebaseapp.com",
    databaseURL: "https://barter-app-88ad0.firebaseio.com",
    projectId: "barter-app-88ad0",
    storageBucket: "barter-app-88ad0.appspot.com",
    messagingSenderId: "84565576929",
    appId: "1:84565576929:web:be10f3591b53fed2ae3ba0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();