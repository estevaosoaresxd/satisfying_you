import React from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextDefault} from '../../../components/TextDefault';
import {Container} from '../../../components/Container';
import {Row} from '../../../components/Row';
import {Column} from '../../../components/Column';
import {useAuth} from '../../../modules/AuthContext';

export const DrawerMenu = ({navigation}) => {
  const {signOutAuth, user} = useAuth();

  const signOutUser = async () => {
    await signOutAuth();

    navigation.replace('login');
  };

  return (
    <Container style={styles.container}>
      <Column style={styles.column}>
        <TextDefault style={styles.label}>{user.email}</TextDefault>
        <View style={styles.divider} />
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          style={styles.button}>
          <Row style={styles.row}>
            <Icon name="file-document-outline" style={styles.icon} />
            <View style={{width: 10}}></View>
            <TextDefault style={styles.label}>Pesquisas</TextDefault>
          </Row>
        </TouchableOpacity>
      </Column>

      <TouchableOpacity onPress={signOutUser} style={styles.button}>
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
  column: {flex: 1, alignItems: 'stretch', width: '100%'},
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
    width: 'auto',
  },
  icon: {
    color: '#ffffff',
    fontSize: 24,
  },
});
