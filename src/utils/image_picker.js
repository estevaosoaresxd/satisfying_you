const {launchImageLibrary, launchCamera} = require('react-native-image-picker');

const options = {
  mediaType: 'photo',
  includeBase64: false,
  maxHeight: 2000,
  maxWidth: 2000,
};

const openImagePicker = () => {
  launchImageLibrary(options, response => responsePicker(response));
};

const openCamera = () => {
  launchCamera(options, response => responsePicker(response));
};

const responsePicker = response => {
  if (response.didCancel) {
    return null;
  } else if (response.error) {
    return null;
  } else {
    let imageUri = response.uri || response.assets?.[0]?.uri;

    return imageUri;
  }
};

export {openImagePicker, openCamera};
