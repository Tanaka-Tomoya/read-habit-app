import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCu4MWyyYZtowhyrNxs9ZQ68AvRcPK8zCA',
  authDomain: 'read-habit-app.firebaseapp.com',
  databaseURL: 'https://read-habit-app.firebaseio.com',
  projectId: 'read-habit-app',
  storageBucket: 'read-habit-app.appspot.com',
  messagingSenderId: '116811526604'
});
export const db = firebase.firestore();
