import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCu4MWyyYZtowhyrNxs9ZQ68AvRcPK8zCA',
  authDomain: 'read-habit-app.firebaseapp.com',
  databaseURL: 'https://read-habit-app.firebaseio.com',
  projectId: 'read-habit-app',
  storageBucket: 'read-habit-app.appspot.com',
  messagingSenderId: '116811526604'
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.firestore(firebaseApp);
