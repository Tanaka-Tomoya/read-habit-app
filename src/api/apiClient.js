// import axios from 'axios';
import db from 'src/api/firebaseConfig';

const hoge = db
  .collection('users')
  .doc('7EuQigduR8mZc3HsexIk')
  .get();

const data = hoge.data();

console.log(data);

// const client = axios.create({
//   baseURL: usersRef,
//   timeout: 30000
// });

// export default client;
