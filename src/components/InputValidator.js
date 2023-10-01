import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextDefault} from './TextDefault';
import {Row} from './Row';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const InputValidator = ({
  value,
  text,
  Svg,
  image,
  icon,
  onChange,
  onSubmit,
  onTapIcon,
  hasIcon,
  keyboardType,
  typeIcon,
  placeholder,
  isPassword,
  styleText,
  styleInput,
  styleIcon,
}) => {
  const iconDefault = () => {
    switch (typeIcon) {
      case 'community':
        return (
          <IconCommunity
            name={icon}
            size={30}
            style={{...styles.icon, ...styleIcon}}
          />
        );
      case 'svg':
        return <Svg width={30} height={30} />;
      case 'img':
        return <Image style={styles.image} source={image} />;
      default:
        return (
          <Icon name={icon} size={30} style={{...styles.icon, ...styleIcon}} />
        );
    }
  };

  return (
    <View>
      <TextDefault style={{...styles.text, ...styleText}}>{text}</TextDefault>
      <Row style={styles.row}>
        <TextInput
          value={value}
          style={{...styles.row.input, ...styleInput}}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={isPassword ?? false}
          placeholderTextColor={'#3F92C5'}
        />
        {hasIcon && (
          <TouchableOpacity onPress={onTapIcon}>
            {iconDefault()}
          </TouchableOpacity>
        )}
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
  },
  icon: {
    color: '#000000',
  },
  image: {
    height: 30,
    width: 30,
  },
  row: {
    backgroundColor: 'white',
    height: 40,
    paddingStart: 10,
    paddingEnd: 10,
    input: {
      flex: 1,
      fontFamily: 'AveriaLibre-Regular',
      color: '#3F92C5',
      fontSize: 18,
      height: 40,
      backgroundColor: 'white',
    },
  },
});

export {InputValidator};
