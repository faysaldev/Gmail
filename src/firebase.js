import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhFfu4eTnM1gfYEB6Zy-3GsKELsDmh_Ss",
    authDomain: "clone-e2f51.firebaseapp.com",
    projectId: "clone-e2f51",
    storageBucket: "clone-e2f51.appspot.com",
    messagingSenderId: "842236616005",
    appId: "1:842236616005:web:247205075f393b0490b22c",
    measurementId: "G-BFZ30D30Z6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};