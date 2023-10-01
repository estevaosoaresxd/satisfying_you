import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from '../../components/Container';
import {InputValidator} from '../../components/InputValidator';
import {TextDefault} from '../../components/TextDefault';
import {ButtonDefault} from '../../components/ButtonDefault';
import {Column} from '../../components/Column';
import {validateEmail} from '../../utils/validators/email_validator';

const RegisterPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRep, setPasswordRep] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: 'Nova Conta',
    });
  }, [navigation]);

  const register = () => {
    setErrorEmail(false);
    setErrorPassword(false);

    if (!validateEmail(email)) {
      setErrorEmail(true);
    }

    if (
      password !== passwordRep ||
      password.trim().length < 1 ||
      passwordRep.trim().length < 1
    ) {
      setErrorPassword(true);
    }

    if (!errorEmail && !errorPassword) {
      navigation.navigate('login');
    }
  };

  return (
    <Container style={styles.container}>
      <Column>
        <InputValidator
          text="E-mail"
          onChange={setEmail}
          value={email}
          placeholder="jurandir.pereira@hotmail.com"
        />
        {errorEmail && (
          <TextDefault style={styles.error}>
            E-mail parece ser inválido
          </TextDefault>
        )}
      </Column>
      <InputValidator
        text="Senha"
        value={password}
        onChange={setPassword}
        isPassword={true}
        placeholder="*********"
      />
      <Column>
        <InputValidator
          text="Repetir Senha"
          value={passwordRep}
          onChange={setPasswordRep}
          isPassword={true}
        />
        {errorPassword && (
          <TextDefault style={styles.error}>
            O campo repetir senha difere da senha
          </TextDefault>
        )}
      </Column>

      <ButtonDefault
        text="CADASTRAR"
        style={styles.buttonCadastrar}
        onTap={() => register()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '15%',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  buttonCadastrar: {
    fontWeight: 50,
    backgroundColor: '#37BD6D',
    paddingVertical: 10,
    marginVertical: 10,
  },
  error: {
    color: '#FD7979',
  },
});

export {RegisterPage};
