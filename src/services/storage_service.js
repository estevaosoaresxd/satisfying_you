import {ref, uploadBytes, deleteObject, updateMetadata} from 'firebase/storage';
import {useAuth} from '../modules/AuthContext';

const {storage} = require('../shared/firebase/config');

const images = 'images';

const getPath = (userId, name) => `${images}/${userId}/${name}`;

const saveImage = async (userId, name, blob) => {
  const imageRef = ref(storage, getPath(userId, name));

  return await uploadBytes(imageRef, blob);
};

const deleteImage = async (userId, name) => {
  const imageRef = ref(storage, getPath(userId, name));

  return await deleteObject(imageRef);
};

const updateImage = async (userId, name, blob) => {
  const imageRef = ref(storage, getPath(userId, name));

  return await updateMetadata(imageRef, blob);
};

const getBlobOfUrl = async url => {
  const arquive = await fetch(url);
  return await arquive.blob();
};

export {saveImage, deleteImage, updateImage, getBlobOfUrl};
