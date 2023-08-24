import {StyleSheet, SafeAreaView} from 'react-native';

export const Container = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#372775',
  },
});
