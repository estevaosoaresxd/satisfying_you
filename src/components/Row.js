import {StyleSheet, View} from 'react-native';

const Row = ({children, style}) => {
  return <View style={{...styles.row, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Row};
