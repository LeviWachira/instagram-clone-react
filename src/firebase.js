import firebase from "firebase";

// firebase.initializeApp => your Firebase SDK snippet

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
