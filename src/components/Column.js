import {StyleSheet, View} from 'react-native';

export const Column = ({children}) => {
  return <View style={styles.column}>{children}</View>;
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
});
