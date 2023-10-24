const {launchImageLibrary, launchCamera} = require('react-native-image-picker');

const options = {
  mediaType: 'photo',
  includeBase64: false,
  selectionLimit: 1,
  maxHeight: 2000,
  maxWidth: 2000,
};

const openImagePicker = async () => {
  return await launchImageLibrary(options, response =>
    responsePicker(response),
  );
};

const openCamera = async () => {
  return await launchCamera(options, response => responsePicker(response));
};

const responsePicker = response => {
  if (response.didCancel) {
    return null;
  } else if (response.error) {
    return null;
  } else {
    let imageUri = response.assets || response.assets?.[0]?.assets;

    return imageUri;
  }
};

export {openImagePicker, openCamera};
