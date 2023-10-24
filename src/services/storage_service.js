const {getDownloadURL, ref, uploadBytes} = require('firebase/storage');
const {storage} = require('../firebase/config');

const saveImage = async (name, blob) => {
  const imageRef = ref(storage, `images/${name}`);

  return await uploadBytes(imageRef, blob);
};

export {saveImage};
