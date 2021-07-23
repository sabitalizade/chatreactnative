import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
apiKey: "AIzaSyA09qnw56eq1EamX-cf51tAm49aWRuh5TY",
authDomain: "gifted-chat-trial.firebaseapp.com",
projectId: "gifted-chat-trial",
storageBucket: "gifted-chat-trial.appspot.com",
messagingSenderId: "882503988252",
appId: "1:882503988252:web:c1fb62beebfb6dd9c91bd9"
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