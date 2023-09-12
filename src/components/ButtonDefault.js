import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {TextDefault} from './TextDefault';

const ButtonDefault = ({text, onTap, style, titleStyle}) => {
  return (
    <View>
      <TouchableOpacity
        style={{...styles.gestureDetector, ...style}}
        onPress={onTap}>
        <TextDefault
          style={{...styles.gestureDetector.textButton, ...titleStyle}}>
          {text}
        </TextDefault>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gestureDetector: {
    textButton: {
      color: '#ffffff',
    },
    alignItems: 'center',
  },
});

export {ButtonDefault};
