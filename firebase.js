import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCjWcWPbKsXCs93mww6B7VWid4RkiRPYxA",
  authDomain: "react-native-projects-80c2f.firebaseapp.com",
  projectId: "react-native-projects-80c2f",
  storageBucket: "react-native-projects-80c2f.appspot.com",
  messagingSenderId: "698804821287",
  appId: "1:698804821287:web:713f8014a269d54fc69d02",
  measurementId: "G-PFNCHDNXBR"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export {firebase, db};