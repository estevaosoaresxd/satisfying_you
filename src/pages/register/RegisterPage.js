import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../../components/Container';
import { InputValidator } from '../../components/InputValidator';
import { TextDefault } from '../../components/TextDefault';
import { ButtonDefault } from '../../components/ButtonDefault';
import { Column } from '../../components/Column';
import { validateEmail } from '../../utils/validators/email_validator';

const RegisterPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRep, setPasswordRep] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);

  const cadastra = () => {
    setErrorEmail(false);
    setErrorSenha(false);
    if (validateEmail(email) === false) {
      setErrorEmail(true);
    }
    if (password !== passwordRep) {
      setErrorSenha(true);
    }
    if (setErrorEmail === true && setErrorSenha === true) {
      navigation.navigate('login');
    }
  };

  return <Container style={styles.container}>
    <Column>
      <InputValidator text="E-mail" onChange={setEmail} value={email} />
      <View style={{ height: 10 }}></View>
      <InputValidator
        text="Senha"
        value={password}
        onChange={setPassword}
        isPassword={true}
      />
      <View style={{ height: 10 }}></View>
      <InputValidator
        text="Repetir Senha"
        value={passwordRep}
        onChange={setPasswordRep}
        isPassword={true}
      />
      {errorEmail ? (
        <TextDefault style={styles.error}>
          E-mail parece ser inválido
        </TextDefault>
      ) : null}

      {errorSenha ? (
        <TextDefault style={styles.error}>
          O campo repetir senha difere da senha
        </TextDefault>
      ) : null}

      <View style={{ height: 15 }}></View>
      <ButtonDefault
        text="Cadastrar"
        style={styles.buttonCadastrar}
        onTap={() => cadastra()}
      />
    </Column>
  </Container>
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '15%',
    paddingVertical: '1%'
  },
  buttonCadastrar: {
    fontWeight: 50,
    backgroundColor: '#37BD6D',
    paddingVertical: 10,
    marginVertical: 10,
  },
  error: {
    color: '#FD7979'
  }

});

export { RegisterPage };