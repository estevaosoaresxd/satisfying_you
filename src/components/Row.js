import {StyleSheet, View} from 'react-native';

export const Row = ({children}) => {
  return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
