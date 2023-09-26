import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from '../../components/Container';
import {InputValidator} from '../../components/InputValidator';
import {TextDefault} from '../../components/TextDefault';
import {ButtonDefault} from '../../components/ButtonDefault';
import {Column} from '../../components/Column';
import {validateEmail} from '../../utils/validators/email_validator';

const ForgotPasswordPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: 'Recuperação de Senha',
    });
  }, [navigation]);

  const sendEmail = () => {
    setError(false);

    if (validateEmail(email)) {
      navigation.navigate('login');
    } else {
      setError(true);
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
        <View style={{height: 5}}></View>
        {error ? (
          <TextDefault style={styles.error}>
            E-mail parece ser inválido
          </TextDefault>
        ) : null}
      </Column>
      <ButtonDefault
        text="RECUPERAR"
        style={styles.buttonRecuperar}
        onTap={() => sendEmail()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '15%',
    paddingVertical: '8%',
    justifyContent: 'space-between',
  },
  buttonRecuperar: {
    backgroundColor: '#37BD6D',
    paddingVertical: 10,
  },
  error: {
    color: '#FD7979',
  },
});

export {ForgotPasswordPage};
