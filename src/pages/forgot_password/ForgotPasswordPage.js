import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container } from '../../components/Container';
import { InputValidator } from '../../components/InputValidator';
import { TextDefault } from '../../components/TextDefault';
import { ButtonDefault } from '../../components/ButtonDefault';
import { Column } from '../../components/Column';
import { validateEmail } from '../../utils/validators/email_validator';

const ForgotPasswordPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const recupera = () => {
    setError(false);

    if (validateEmail(email)) {
      navigation.navigate('login');
    } else {
      setError(true);
    }
  };

  return <Container style={styles.container}>
    <Column>
      <InputValidator text="E-mail" onChange={setEmail} value={email} />
      <View style={{ height: 10 }}></View>
      {error ? (
        <TextDefault style={styles.error}>
          E-mail parece ser inválido
        </TextDefault>
      ) : null}
      <View style={{ height: 15 }}></View>
      <ButtonDefault
        text="RECUPERAR"
        style={styles.buttonRecuperar}
        onTap={() => recupera()}
      />
    </Column>
  </Container>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '15%',
    paddingVertical: '10%'
  },
  buttonRecuperar: {
    backgroundColor: '#37BD6D',
    paddingVertical: 10,
    marginVertical: 30,
  },
  error: {
    color: '#FD7979'
  }
});

export { ForgotPasswordPage };