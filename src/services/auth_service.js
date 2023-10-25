import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {auth} from '../shared/firebase/config';

const AuthLogin = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const AuthRegister = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const AuthSignOut = async () => {
  return await signOut(auth);
};

const AuthForgotPassword = async email => {
  return await sendPasswordResetEmail(auth, email);
};

export {AuthLogin, AuthSignOut, AuthForgotPassword, AuthRegister};
