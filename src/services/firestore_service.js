import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

import {firestore} from '../firebase/config';

const surveys = 'surveys';
const users = 'users';

const addSurvey = async data => {
  return await addDoc(collection(firestore, surveys), data);
};

const updateSurvey = async (docId, newData) => {
  let document = doc(firestore, surveys, docId);

  return await updateDoc(document, newData);
};

const deleteSurvey = async docId => {
  let document = doc(firestore, surveys, docId);

  return await deleteDoc(document);
};

const getAllSurveys = async () => {
  const q = query(collection(firestore, surveys));

  onSnapshot(q, querySnapshot => {
    querySnapshot.forEach(doc => {
      const survey = doc.data();

      console.log(survey);
    });
  });
};

const addUser = async data => {
  return await addDoc(collection(firestore, users), data);
};

const getUser = async docId => {
  let document = doc(firestore, users, docId);

  return await getDoc(document, data);
};

const updateUser = async (docId, newData) => {
  let document = doc(firestore, users, docId);

  return await updateDoc(document, newData);
};

const removeUser = async docId => {
  let document = doc(firestore, users, docId);

  return await deleteDoc(document);
};

export {
  getAllSurveys,
  addSurvey,
  updateSurvey,
  deleteSurvey,
  addUser,
  updateUser,
  removeUser,
  getUser,
};
