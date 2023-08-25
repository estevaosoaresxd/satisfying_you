import {StyleSheet, View} from 'react-native';

const Column = ({children, style}) => {
  return <View style={{...styles.column, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
});

export {Column};
