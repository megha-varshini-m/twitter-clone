import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDQQETAQyTdHsomJYA6UPGv6O_ACNb2tNM",
    authDomain: "twitter-clone-a1d3f.firebaseapp.com",
    projectId: "twitter-clone-a1d3f",
    storageBucket: "twitter-clone-a1d3f.appspot.com",
    messagingSenderId: "411139982217",
    appId: "1:411139982217:web:3e74c6fdac830f6972d758",
    measurementId: "G-G9LX96EGFF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;