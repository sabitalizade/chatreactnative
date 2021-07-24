import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyChp1Wsy0XwBqUzgqF8byinzlj_xAudGwA",
    authDomain: "chatapp-1fbaa.firebaseapp.com",
    projectId: "chatapp-1fbaa",
    storageBucket: "chatapp-1fbaa.appspot.com",
    messagingSenderId: "1098870780858",
    appId: "1:1098870780858:web:5d1432e0ad72f74824e383"
  };
let app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };