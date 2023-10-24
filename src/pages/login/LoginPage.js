import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Row} from '../../components/Row';
import {Container} from '../../components/Container';
import {InputValidator} from '../../components/InputValidator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextDefault} from '../../components/TextDefault';
import {ButtonDefault} from '../../components/ButtonDefault';
import {Column} from '../../components/Column';
import {validateEmail} from '../../shared/utils/validators/email_validator';
import {AuthLogin} from '../../services/auth_service';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const login = async () => {
    setError(false);

    if (validateEmail(email)) {
      await AuthLogin(email, password)
        .then(userCredential => {
          const user = userCredential.user;

          console.log(user.uid);

          navigation.replace('drawer-home');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode == 'auth/invalid-login-credentials') {
            setError(true);
          }
        });
    } else {
      setError(true);
    }
  };

  return (
    <Container style={styles.container}>
      <Row style={styles.row}>
        <TextDefault style={styles.title}>Satisfying.you</TextDefault>
        <View style={{width: 30}}></View>
        <Icon name="sentiment-satisfied-alt" size={50} color="white" />
      </Row>

      <Column>
        <InputValidator
          text="E-mail"
          onChange={setEmail}
          value={email}
          placeholder=""
        />
        <View style={{height: 10}}></View>
        <InputValidator
          text="Senha"
          value={password}
          onChange={setPassword}
          onSubmit={login}
          isPassword={true}
          placeholder=""
        />
        {error ? (
          <TextDefault style={styles.error}>
            E-mail e/ ou senha inválidos
          </TextDefault>
        ) : null}
        <View style={{height: 15}}></View>
        <ButtonDefault
          text="Entrar"
          style={styles.buttonLogin}
          onTap={() => login()}
        />
      </Column>

      <Column>
        <ButtonDefault
          text="Criar minha conta"
          style={styles.buttonForgot}
          onTap={() => navigation.navigate('register')}
        />
        <View style={{height: 5}}></View>
        <ButtonDefault
          text="Esqueci minha senha"
          style={styles.buttonRegister}
          onTap={() => navigation.navigate('forgot-password')}
        />
      </Column>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    color: 'white',
  },
  error: {
    color: '#FD7979',
  },
  row: {},
  container: {
    paddingTop: '2%',
    paddingHorizontal: '15%',
    paddingBottom: '1%',
  },
  buttonLogin: {
    backgroundColor: '#37BD6D',
    paddingVertical: 8,
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
