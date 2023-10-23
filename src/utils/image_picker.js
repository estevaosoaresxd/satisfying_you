const {launchImageLibrary, launchCamera} = require('react-native-image-picker');

const openImagePicker = () => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  launchImageLibrary(options, response => {
    if (response.didCancel) {
      return null;
    } else if (response.error) {
      return null;
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;

      return imageUri;
    }
  });
};

const openCamera = () => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  launchCamera(options, response => {
    if (response.didCancel) {
      return null;
    } else if (response.error) {
      return null;
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;

      return imageUri;
    }
  });
};

export {openImagePicker, openCamera};
