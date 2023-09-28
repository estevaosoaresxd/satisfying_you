import {TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {TextDefault} from './TextDefault';
import {Column} from './Column';

const ImageButton = ({
  text,
  onTap,
  img,
  styleButton,
  styleText,
  styleTextButton,
}) => {
  return (
    <View style={styles.container}>
      <TextDefault style={{...styles.text, ...styleText}}>{text}</TextDefault>
      <TouchableOpacity
        style={{...styles.gestureDetector, ...styleButton}}
        onPress={onTap}>
        {img != undefined ? (
          <Image style={styles.image} source={img} />
        ) : (
          <TextDefault style={{...styles.textButton, ...styleTextButton}}>
            Câmera/Galeria de imagens
          </TextDefault>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gestureDetector: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  textButton: {
    color: '#939393',
    fontSize: 12,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export {ImageButton};
