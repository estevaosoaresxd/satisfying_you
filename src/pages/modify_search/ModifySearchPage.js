import React from 'react';
import {StyleSheet} from 'react-native';
import {Container} from '../../components/Container';

const ModifySearchPage = ({navigation, route}) => {
  const {type} = route.params;

  const getTitle = () => {
    switch (type) {
      case 'NEW':
        return 'Nova Pesquisa';
      case 'UPDATE':
        return 'Modificar Pesquisa';
      default:
        return 'Sem título';
    }
  };

  React.useEffect(() => {
    navigation.setOptions({
      title: getTitle(),
    });
  }, [navigation]);

  return <Container style={styles.container}></Container>;
};

const styles = StyleSheet.create({
  container: {},
});

export {ModifySearchPage};
