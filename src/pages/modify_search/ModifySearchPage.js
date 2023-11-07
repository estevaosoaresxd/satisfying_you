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
import {
  addSurvey,
  deleteSurvey,
  updateSurvey,
} from '../../services/firestore_service';
import {openCamera, openImagePicker} from '../../shared/utils/image_picker';
import {
  deleteImage,
  getBlobOfUrl,
  saveImage,
  updateImage,
} from '../../services/storage_service';
import {getDownloadURL} from 'firebase/storage';
import {useSurveys} from '../../modules/SurveysContext';
import DatePicker from 'react-native-date-picker';
import {dateFormat} from '../../shared/utils/date_format';

const ModifySearchPage = ({navigation, route}) => {
  const {type, surveyId, userId} = route.params;

  const [name, setName] = useState('');
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [errorName, setErrorName] = useState(false);
  const [errorCalendar, setErrorCalendar] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const {findSurveyById} = useSurveys();

  const oldSurvey = findSurveyById(surveyId);

  const setValuesInInput = () => {
    if (oldSurvey.name) {
      setName(oldSurvey.name);
    }

    if (oldSurvey.date) {
      let date = new Date(oldSurvey.date);

      setDate(date);
    }

    if (oldSurvey.image) {
      setImage(oldSurvey.image);
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

  const onTapButtonType = async () => {
    switch (type) {
      case 'NEW':
        await onTapRegister();
        break;
      case 'UPDATE':
        await onTapUpdate();
        break;
    }
  };

  const onTapRegister = async () => {
    const document = {
      name: name,
      date: date.toISOString(),
    };

    if (image) {
      const blob = await getBlobOfUrl(image);
      const ref = await saveImage(userId, name, blob).then(
        async res => res.ref,
      );
      const url = await getDownloadURL(ref).then(url => url);

      if (url) {
        document['image'] = url;
      }
    }

    await addSurvey(document, userId)
      .then(e => {
        console.log(e, 'sucess');
        navigation.navigate('home');
      })
      .catch(e => console.log(e, 'error'));
  };

  const onTapUpdate = async () => {
    const document = {
      name: name,
      date: date.toISOString(),
      image: image,
    };

    if (image != oldSurvey.image) {
      await deleteImage(userId, oldSurvey.name);

      const blob = await getBlobOfUrl('error');

      const ref = await saveImage(userId, name, blob).then(
        async res => res.ref,
      );

      var url = await getDownloadURL(ref).then(url => url);

      if (url) {
        document.image = url;
      }
    }

    await updateSurvey(surveyId, userId, document).then(e => {
      navigation.navigate('home');
    });
  };

  const onTapDelete = async () => {
    await deleteImage(userId, oldSurvey.name);

    await deleteSurvey(surveyId, 1)
      .then(e => {
        console.log(e, 'sucess');
        navigation.navigate('home');
      })
      .catch(e => console.log(e, 'error'));
  };

  const onTapButton = async () => {
    setErrorName(false);
    setErrorCalendar(false);

    let isValid = true;

    if (!name.trim()) {
      setErrorName(true);
      isValid = false;
    }

    if (!date) {
      setErrorCalendar(true);
      isValid = false;
    }

    if (isValid) {
      onTapButtonType();
    }
  };

  const onTapImageButton = async () => {
    await openCamera()
      .then(res => {
        if (res.assets && res.assets.length > 0) {
          let {fileName, type, originalPath, uri} = res.assets[0];

          setImage(uri);
        } else if (res.didCancel) {
          console.log('canceled');
        }
      })
      .catch(e => console.log('error', e));
  };

  useEffect(() => {
    navigation.setOptions({
      title: getTitle(),
    });

    if (surveyId) {
      setValuesInInput();
    }
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
          value={date != undefined ? dateFormat(date) : ''}
          onTap={() => setShowDate(true)}
          typeIcon="img"
          hasIcon={true}
          image={ImagesAssets.calendar}
          onTapIcon={() => setShowDate(true)}
        />
        {errorCalendar && (
          <TextDefault style={styles.error}>Preencha a data</TextDefault>
        )}
      </Column>

      <DatePicker
        modal
        mode="date"
        open={showDate}
        date={date ?? new Date()}
        onConfirm={date => {
          setShowDate(false);
          setDate(date);
        }}
        onCancel={() => {
          setShowDate(false);
        }}
      />

      <ImageButton
        text="Imagem"
        styleButton={styles.buttonImage}
        img={image}
        onTap={onTapImageButton}
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
        onPressConfirm={() => onTapDelete()}
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
