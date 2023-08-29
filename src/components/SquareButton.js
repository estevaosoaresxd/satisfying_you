import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Column} from './Column';
import {TextDefault} from './TextDefault';

const SquareButton = ({
  icon,
  title,
  description,
  onTap,
  isOutline,
  styleButton,
  styleIcon,
  styleTitle,
  styleDescription,
}) => {
  return (
    <Column>
      <TouchableOpacity
        style={{...styles.button, ...styleButton}}
        onPress={onTap}>
        {isOutline ? (
          <Icon name={icon} size={120} style={{...styles.icon, ...styleIcon}} />
        ) : (
          <Icon name={icon} size={120} style={{...styles.icon, ...styleIcon}} />
        )}

        <TextDefault style={{...styles.title, ...styleTitle}}>
          {title}
        </TextDefault>
        <TextDefault style={{...styles.description, ...styleDescription}}>
          {description}
        </TextDefault>
      </TouchableOpacity>
    </Column>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
  },
  icon: {
    color: '#000000',
  },
  title: {
    color: '#3F92C5',
    fontSize: 36,
  },
  description: {
    color: '#8B8B8B',
    fontSize: 16,
  },
});

export {SquareButton};
