import firebase from "firebase";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "clone-b3fc4.firebaseapp.com",
  projectId: "clone-b3fc4",
  storageBucket: "clone-b3fc4.appspot.com",
  messagingSenderId: "334727872515",
  appId: "1:334727872515:web:93869c36391bb6afcb4e36",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
