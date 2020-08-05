import firebase from "firebase";

// firebase.initial => firebase SDK snippet settting 

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
