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

import {firestore} from '../shared/firebase/config';

const surveys = 'surveys';

const pathSurvey = userId => `${surveys}/${userId}/${surveys}`;

const getQuerySurvey = userId => {
  return query(collection(firestore, pathSurvey(userId)));
};

const addSurvey = async (data, userId) => {
  const votes = {
    terrible: 0,
    bad: 0,
    neutral: 0,
    good: 0,
    great: 0,
  };

  data = {...data, ...votes};

  return await addDoc(collection(firestore, pathSurvey(userId)), data);
};

const updateSurvey = async (docId, userId, newData) => {
  const document = doc(firestore, pathSurvey(userId), docId);

  return await updateDoc(document, newData);
};

const deleteSurvey = async (docId, userId) => {
  const document = doc(firestore, pathSurvey(userId), docId);

  return await deleteDoc(document);
};

export {addSurvey, updateSurvey, deleteSurvey, pathSurvey, getQuerySurvey};
