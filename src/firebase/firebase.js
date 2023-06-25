import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlbNeB3YcsVuAURTSjyBzVe6LqMrAjk0M",
  authDomain: "apna-ott.firebaseapp.com",
  databaseURL: "https://apna-ott-default-rtdb.firebaseio.com",
  projectId: "apna-ott",
  storageBucket: "apna-ott.appspot.com",
  messagingSenderId: "428424903282",
  appId: "1:428424903282:web:573c4d05864193e1d0e0eb",
  measurementId: "G-7ETZCJB3GH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseFirestore = firebaseApp.firestore();
const firebaseAuth = firebaseApp.auth();

export { firebaseFirestore, firebaseAuth };