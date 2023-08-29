import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Row} from '../../components/Row';
import {Container} from '../../components/Container';
import {InputValidator} from '../../components/InputValidator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextDefault} from '../../components/TextDefault';
import {ButtonDefault} from '../../components/ButtonDefault';
import {Column} from '../../components/Column';

const HomePage = ({navigation}) => {
  return (
    <Container style={styles.container}>
      <Row></Row>
    </Container>
  );
};

const styles = StyleSheet.create({});

export {HomePage};
