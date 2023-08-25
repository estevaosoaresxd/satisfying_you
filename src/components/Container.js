import {StyleSheet, SafeAreaView} from 'react-native';

const Container = ({children, style}) => {
  return (
    <SafeAreaView style={{...styles.container, ...style}}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#372775',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export {Container};
