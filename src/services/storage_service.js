import {ref, uploadBytes, deleteObject, updateMetadata} from 'firebase/storage';

import {AuthData} from './auth_service';

const {storage} = require('../firebase/config');

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

export {saveImage, deleteImage, updateImage};
