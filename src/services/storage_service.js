import {ref, uploadBytes, deleteObject, updateMetadata} from 'firebase/storage';

import {AuthData} from './auth_service';

const {storage} = require('../shared/firebase/config');

const images = 'images';
const userInfo = AuthData();

const saveImage = async (name, blob) => {
  const path = `${images}/${userInfo.uid}/${name}`;
  const imageRef = ref(storage, path);

  return await uploadBytes(imageRef, blob);
};

const deleteImage = async name => {
  const path = `${images}/${userInfo.uid}/${name}`;
  const imageRef = ref(storage, path);

  return await deleteObject(imageRef);
};

const updateImage = async (name, blob) => {
  const path = `${images}/${userInfo.uid}/${name}`;
  const imageRef = ref(storage, path);

  return await updateMetadata(imageRef, blob);
};

const getBlobOfUrl = async url => {
  const arquive = await fetch(url);
  return await arquive.blob();
};

export {saveImage, deleteImage, updateImage, getBlobOfUrl};
