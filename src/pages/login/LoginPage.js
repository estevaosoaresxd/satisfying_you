import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Row} from '../../components/Row';
import {Container} from '../../components/Container';
import {InputValidator} from '../../components/InputValidator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextDefault} from '../../components/TextDefault';
import {ButtonDefault} from '../../components/ButtonDefault';
import {Column} from '../../components/Column';

const LoginPage = ({navigation}) => {
  return (
    <Container style={styles.container}>
      <Row>
        <TextDefault style={styles.title}>Satisfying</TextDefault>
        <View style={{width: 30}}></View>
        <Icon name="sentiment-satisfied-alt" size={50} color="white" />
      </Row>

      <Column>
        <InputValidator text="E-mail"></InputValidator>
        <View style={{height: 10}}></View>
        <InputValidator text="Senha" isPassword={true}></InputValidator>
        <View style={{height: 15}}></View>
        <ButtonDefault
          text="Entrar"
          style={styles.buttonLogin}
          onTap={() => navigation.navigate('drawer-home')}
        />
      </Column>

      <Column>
        <ButtonDefault text="Criar minha conta" style={styles.buttonForgot} />
        <View style={{height: 5}}></View>
        <ButtonDefault
          text="Esqueci minha senha"
          style={styles.buttonRegister}
        />
      </Column>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'white',
  },
  container: {
    paddingHorizontal: '15%',
    paddingVertical: '1%',
  },
  buttonLogin: {
    backgroundColor: '#37BD6D',
    paddingVertical: 10,
  },
  buttonForgot: {
    backgroundColor: '#B0CCDE',
    paddingVertical: 3,
  },
  buttonRegister: {
    backgroundColor: '#419ED7',
    paddingVertical: 3,
  },
});

export {LoginPage};
