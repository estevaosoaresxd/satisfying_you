import {StyleSheet, Text} from 'react-native';

const TextDefault = ({children, style}) => {
  return <Text style={{...styles.title, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'AveriaLibre-Regular',
  },
});

export {TextDefault};
