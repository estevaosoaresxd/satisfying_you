import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from '../../components/Container';
import {InputValidator} from '../../components/InputValidator';
import {TextDefault} from '../../components/TextDefault';
import {ButtonDefault} from '../../components/ButtonDefault';
import {Column} from '../../components/Column';
import {validateEmail} from '../../utils/validators/email_validator';
import {auth} from '../../firebase/config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

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

  const register = async () => {
    setErrorEmail(false);
    setErrorPassword(false);

    let isValid = true;

    if (!validateEmail(email)) {
      setErrorEmail(true);
      isValid = false;
    }

    if (
      password !== passwordRep ||
      password.trim().length < 1 ||
      passwordRep.trim().length < 1
    ) {
      setErrorPassword(true);
      isValid = false;
    }

    if (isValid) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          navigation.navigate('login');

          console.log(user);
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorMessage);
        });
    }
  };

  return (
    <Container style={styles.container}>
      <Column>
        <InputValidator
          text="E-mail"
          onChange={setEmail}
          value={email}
          placeholder=""
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
