import React, { Component } from 'react';
// import { db } from 'src/api/firebaseConfig';

export class Home extends Component {
  componentWillMount() {}

  render() {
    return <p>aaaa</p>;
  }
}

export default Home;

// const hoge = db
// .collection('users')
// .doc('7EuQigduR8mZc3HsexIk')
// .collection('goal');
// const result = hoge
// .get()
// .then(snapshot => {
//   snapshot.forEach(doc => {
//     console.log(`${doc.id} => ${doc.data().book}`);
//     return doc.data().book;
//   });
// })
// .catch(err => {
//   console.log('error', err);
// });
