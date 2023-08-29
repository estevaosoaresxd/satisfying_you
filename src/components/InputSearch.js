import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Row} from './Row';

const InputSearch = ({
  value,
  onChange,
  onSubmit,
  keyboardType,
  placeholder,
  isPassword,
  styleInput,
  styleRow,
}) => {
  return (
    <Row style={{...styles.row, ...styleRow}}>
      <Icon name="search" size={24} color={'grey'} />
      <TextInput
        value={value}
        style={{...styles.input, ...styleInput}}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={isPassword ?? false}
      />
    </Row>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    fontSize: 18,
    height: 40,
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingHorizontal: 9,
  },
});

export {InputSearch};
