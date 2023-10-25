import {useState, useMemo} from 'react';
import {Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container} from '../../components/Container';
import {TextDefault} from '../../components/TextDefault';
import {Row} from '../../components/Row';
import {SquareButton} from '../../components/SquareButton';
import {Column} from '../../components/Column';
import baseSvg from './../../../assets/svg/horrible.svg';
import {updateSurvey} from '../../services/firestore_service';
import {useSurveys} from '../../modules/SurveysContext';

const {width, height} = Dimensions.get('window');

const SatisfyingCollectPage = ({navigation, route}) => {
  const {surveyId, userId} = route.params;
  const [showMessage, setShowMessage] = useState(false);
  const {findSurveyById, surveys} = useSurveys();
  const survey = useMemo(() => findSurveyById(surveyId), [surveys]);

  const onTapCollect = async key => {
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 3000);

    await sendVote(key);
  };

  const sendVote = async key => {
    const {id, name, date, image, terrible, bad, neutral, good, great} = survey;

    const document = {name, date, image, terrible, bad, neutral, good, great};

    if (document[key] != null) {
      document[key] += 1;
    }

    await updateSurvey(id, userId, document);
  };

  const satisfyingButtons = [
    {
      type: 'svg',
      baseSvg: baseSvg,
      title: 'Péssimo',
      icon: 'emoticon-sad-outline',
      iconColor: '#D71616',
      key: 'terrible',
    },
    {
      type: 'community',
      title: 'Ruim',
      icon: 'emoticon-sad-outline',
      iconColor: '#FF360A',
      key: 'bad',
    },
    {
      type: 'community',
      title: 'Neutro',
      icon: 'emoticon-neutral-outline',
      iconColor: '#FFC632',
      key: 'neutral',
    },
    {
      type: 'community',
      title: 'Bom',
      icon: 'emoticon-happy-outline',
      iconColor: '#37BD6D',
      key: 'good',
    },
    {
      type: 'community',
      title: 'Excelente',
      icon: 'emoticon-excited-outline',
      iconColor: '#25BC22',
      key: 'great',
    },
  ];

  return (
    <Container style={styles.container}>
      <Column style={styles.lateralButton}>
        <TouchableOpacity
          style={styles.lateralButton.button}
          onPress={() => navigation.pop()}></TouchableOpacity>
      </Column>

      {showMessage ? (
        <Column>
          <TextDefault style={styles.title}>
            Obrigado por participar da pesquisa!
          </TextDefault>
          <View style={{height: height * 0.125}} />
          <TextDefault style={styles.title}>
            Aguardamos você no próximo ano!
          </TextDefault>
        </Column>
      ) : (
        <Column style={styles.container}>
          <TextDefault style={styles.title}>
            O que você achou do {survey.name}?
          </TextDefault>
          <View style={{height: height * 0.125}} />
          <Row>
            {satisfyingButtons.map((button, key) => (
              <SquareButton
                key={key}
                myKey={key}
                icon={button.icon}
                title={button.title}
                onTap={() => onTapCollect(button.key)}
                BaseSvg={button.baseSvg}
                typeIcon={button.type}
                styleButton={styles.button}
                styleIcon={{...styles.button.icon, color: button.iconColor}}
                styleTitle={styles.button.title}
              />
            ))}
          </Row>
        </Column>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lateralButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 40,
    width: '10%',
    button: {
      height: 40,
    },
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  button: {
    width: width * 0.175,
    height: 150,
    backgroundColor: 'transparent',
    icon: {
      fontSize: 80,
      marginBottom: 8,
    },
    title: {
      color: '#ffffff',
      fontSize: 26,
    },
  },
});

export {SatisfyingCollectPage};
