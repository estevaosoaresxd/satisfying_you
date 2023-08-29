import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = ({icon, onTap, styleButton, styleIcon}) => {
  return (
    <View>
      <TouchableOpacity
        style={{...styles.gestureDetector, ...styleButton}}
        onPress={onTap}>
        <Icon
          name={icon}
          size={40}
          style={{...styles.iconButton, ...styleIcon}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gestureDetector: {
    alignItems: 'center',
  },
  iconButton: {
    color: '#ffffff',
  },
});

export {IconButton};
