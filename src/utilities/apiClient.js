import axios from 'axios';
import { firebaseDb } from 'src/utilities/firebaseConfig';

const usersRef = firebaseDb.collection('users');
console.log(usersRef);
const client = axios.create({
  baseURL: usersRef,
  timeout: 30000
});

export default client;