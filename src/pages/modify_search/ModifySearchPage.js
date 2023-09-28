import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Container} from '../../components/Container';
import {ButtonDefault} from '../../components/ButtonDefault';
import {InputValidator} from '../../components/InputValidator';
import {Column} from '../../components/Column';
import {ImageButton} from '../../components/ImageButton';
import {TextDefault} from '../../components/TextDefault';
import {ImagesAssets} from '../../../assets/images/ImagesAssets';

const ModifySearchPage = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  const {type} = route.params;

  const getTitle = () => {
    switch (type) {
      case 'NEW':
        return 'Nova Pesquisa';
      case 'UPDATE':
        return 'Modificar Pesquisa';
    }
  };

  const getButtonName = () => {
    switch (type) {
      case 'NEW':
        return 'CADASTRAR';
      case 'UPDATE':
        return 'SALVAR';
    }
  };

  const onTapButton = () => {
    setErrorName(false);
    setErrorDate(false);

    if (name.trim().length < 1) {
      console.log('entrou nome');
      setErrorName(true);
    }

    if (date.trim().length < 1) {
      console.log('entrou data');
      setErrorDate(true);
    }

    console.log(errorName, errorDate);

    if (!errorName && !errorDate) {
      navigation.navigate('home');
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: getTitle(),
    });
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <Column>
        <InputValidator
          text="Nome"
          onChange={setName}
          value={name}
          placeholder=""
        />
        {errorName ? (
          <TextDefault style={styles.error}>
            Preencha no nome da pesquisa
          </TextDefault>
        ) : null}
      </Column>
      <Column>
        <InputValidator
          text="Data"
          value={date}
          onChange={setDate}
          isPassword={true}
        />
        {errorDate ? (
          <TextDefault style={styles.error}>Preencha a data</TextDefault>
        ) : null}
      </Column>

      <ImageButton
        text="Imagem"
        styleButton={styles.buttonImage}
        img={type == 'NEW' ? ImagesAssets.party : null}
      />

      <ButtonDefault
        text={getButtonName()}
        style={styles.button}
        onTap={() => onTapButton()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '15%',
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  button: {
    fontWeight: 50,
    backgroundColor: '#37BD6D',
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonImage: {
    width: '35%',
    height: 55,
  },
  error: {
    color: '#FD7979',
  },
});

export {ModifySearchPage};
