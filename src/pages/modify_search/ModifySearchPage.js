import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Container} from '../../components/Container';
import {ButtonDefault} from '../../components/ButtonDefault';
import {InputValidator} from '../../components/InputValidator';
import {Column} from '../../components/Column';
import {ImageButton} from '../../components/ImageButton';
import {TextDefault} from '../../components/TextDefault';
import {ImagesAssets} from '../../../assets/images/ImagesAssets';
import {SquareButton} from '../../components/SquareButton';
import {AlertConfirm} from '../../components/AlertConfirm';

const ModifySearchPage = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
        img={type == 'NEW' ? ImagesAssets.party : undefined}
      />
      {type == 'UPDATE' ? (
        <Column style={styles.bottomButton}>
          <SquareButton
            icon="trash-can-outline"
            title="Apagar"
            onTap={() => setShowAlert(true)}
            typeIcon="community"
            styleButton={styles.buttonTrash}
            styleIcon={{...styles.buttonTrash.icon}}
            styleTitle={styles.buttonTrash.title}
          />
        </Column>
      ) : undefined}

      <ButtonDefault
        text={getButtonName()}
        style={styles.button}
        onTap={() => onTapButton()}
      />

      <AlertConfirm
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        onPressCancel={() => navigation.pop()}
        onPressConfirm={() => navigation.navigate('home')}
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
  bottomButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
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
  buttonTrash: {
    backgroundColor: 'transparent',
    icon: {
      fontSize: 24,
      color: '#ffffff',
      marginBottom: 2,
    },
    title: {
      color: '#ffffff',
      fontSize: 14,
    },
  },
  error: {
    color: '#FD7979',
  },
});

export {ModifySearchPage};
