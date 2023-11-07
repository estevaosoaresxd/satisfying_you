import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAEur7GqieUtcEYodc1foi1AK7MeCv5GSs',
  authDomain: 'satisfying-you-app.firebaseapp.com',
  projectId: 'satisfying-you-app',
  storageBucket: 'satisfying-you-app.appspot.com',
  messagingSenderId: '973569123740',
  appId: '1:973569123740:web:af418ac3cc4af5b0035459',
  measurementId: 'G-LQCEYBTYNL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};
