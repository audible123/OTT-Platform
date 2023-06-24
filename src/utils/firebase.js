import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: `${   process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DOMAIN_UTL}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`
});

const firebaseDatabase = app.database();

export {
  firebaseDatabase
};
