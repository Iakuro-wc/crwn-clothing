import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCsT7FcvUS_n-hWh8YhBnvXn7E5uwgUeeY',
  authDomain: 'crwn-db-b81fc.firebaseapp.com',
  projectId: 'crwn-db-b81fc',
  storageBucket: 'crwn-db-b81fc.appspot.com',
  messagingSenderId: '724894278286',
  appId: '1:724894278286:web:e304bd258b332b6c3ddfdf',
  measurementId: 'G-K998520L92',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
