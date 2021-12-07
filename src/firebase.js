import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId,
  measurementId: process.env.REACT_APP_MeasurementId,
});

const auth = firebaseApp.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {auth, db, storage, googleAuth, timestamp};
