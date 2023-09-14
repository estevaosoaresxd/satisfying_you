import React from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextDefault} from '../../../components/TextDefault';
import {Container} from '../../../components/Container';
import {Row} from '../../../components/Row';
import {Column} from '../../../components/Column';

export const CustomDrawerComp = props => {
  const {navigation} = props;

  return (
    <Container style={styles.container}>
      <Column>
        <TextDefault style={styles.label}>usuario@dominio.com</TextDefault>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          style={styles.button}>
          <Row style={styles.row}>
            <Icon name="description" style={styles.icon} />
            <View style={{width: 10}}></View>
            <TextDefault style={styles.label}>Pesquisas</TextDefault>
          </Row>
        </TouchableOpacity>
      </Column>

      <TouchableOpacity
        onPress={() => navigation.replace('login')}
        style={styles.button}>
        <Row style={styles.row}>
          <Icon name="logout" style={styles.icon} />
          <View style={{width: 10}}></View>
          <TextDefault style={styles.label}>Sair</TextDefault>
        </Row>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
  },
  row: {justifyContent: 'start'},
  button: {
    alignSelf: 'stretch',
  },
  divider: {
    height: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  label: {
    color: '#ffffff',
    fontSize: 24,
  },
  icon: {
    color: '#ffffff',
    fontSize: 24,
  },
});
