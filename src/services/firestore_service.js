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

import {AuthData} from './auth_service';

const surveys = 'surveys';
const users = 'users';
const userInfo = AuthData();

const pathSurvey = () => `${surveys}/${userInfo.uid}/${surveys}`;

const getQuerySurvey = () => query(collection(firestore, pathSurvey()));

const addSurvey = async data => {
  const votes = {
    terrible: 0,
    bad: 0,
    neutral: 0,
    good: 0,
    great: 0,
  };

  data = {...data, ...votes};

  return await addDoc(collection(firestore, pathSurvey()), data);
};

const updateSurvey = async (docId, newData) => {
  const document = doc(firestore, pathSurvey(), docId);

  return await updateDoc(document, newData);
};

const deleteSurvey = async docId => {
  const document = doc(firestore, pathSurvey(), docId);

  return await deleteDoc(document);
};

export {addSurvey, updateSurvey, deleteSurvey, pathSurvey, getQuerySurvey};
