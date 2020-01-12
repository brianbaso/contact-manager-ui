import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBnBOu7NN7jdq6S5BbkLWBZN2LxHXZnans',
  authDomain: 'test-19353.firebaseapp.com',
  databaseURL: 'https://test-19353.firebaseio.com',
  projectId: 'test-19353',
  storageBucket: 'test-19353.appspot.com',
  messagingSenderId: '942139816544',
  appId: '1:942139816544:web:e2cc64aa8d81150fc3a105',
  measurementId: 'G-Q4ZB940WPZ'
};
try {
  firebase.initializeApp(config);
} catch (err) {
  console.error('dupe');
}
const fire = firebase;
export default fire;
