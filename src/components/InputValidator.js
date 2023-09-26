import {TextInput, View, StyleSheet} from 'react-native';
import {TextDefault} from './TextDefault';

const InputValidator = ({
  value,
  text,
  onChange,
  onSubmit,
  keyboardType,
  placeholder,
  isPassword,
  styleText,
  styleInput,
}) => {
  return (
    <View>
      <TextDefault style={{...styles.text, ...styleText}}>{text}</TextDefault>
      <TextInput
        value={value}
        style={{...styles.input, ...styleInput}}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={isPassword ?? false}
        placeholderTextColor={'#3F92C5'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white',
    color: '#3F92C5',
    fontSize: 18,
    height: 40,
    paddingStart: 10,
  },
});

export {InputValidator};
