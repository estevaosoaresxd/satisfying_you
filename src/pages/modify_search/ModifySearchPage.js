import {useState, useEffect} from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker';

const ModifySearchPage = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [calendar, setCalendar] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorCalendar, setErrorCalendar] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const {type, title, date, img} = route.params;

  const setValuesInInput = () => {
    if (title) {
      setName(title);
    }

    if (date) {
      setCalendar(date);
    }
  };

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
    setErrorCalendar(false);

    let isValid = true;

    if (!name.trim()) {
      setErrorName(true);
      isValid = false;
    }

    if (!calendar.trim()) {
      setErrorCalendar(true);
      isValid = false;
    }

    if (isValid) {
      navigation.navigate('home');
    }
  };

  const onChangeDate = (ev, date) => {
    // setCalendar(date);
    setShowDate(false);
  };

  useEffect(() => {
    navigation.setOptions({
      title: getTitle(),
    });

    setValuesInInput();
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
        {errorName && (
          <TextDefault style={styles.error}>
            Preencha no nome da pesquisa
          </TextDefault>
        )}
      </Column>
      <Column>
        <InputValidator
          text="Data"
          value={calendar}
          onChange={setCalendar}
          typeIcon="img"
          hasIcon={true}
          image={ImagesAssets.calendar}
          onTapIcon={() => setShowDate(true)}
        />
        {errorCalendar && (
          <TextDefault style={styles.error}>Preencha a data</TextDefault>
        )}
      </Column>
      {showDate && (
        <DateTimePicker
          value={new Date()}
          positiveButton={{label: 'CONFIRMAR', textColor: 'green'}}
          negativeButton={{label: 'CANCELAR', textColor: 'red'}}
          mode="calendar"
          onChange={(ev, date) => onChangeDate(ev, date)}
          dateFormat="day month year"
          locale="pt-BR"
        />
      )}

      <ImageButton
        text="Imagem"
        styleButton={styles.buttonImage}
        img={type != 'NEW' ? img : undefined}
      />

      {type == 'UPDATE' && (
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
      )}

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
