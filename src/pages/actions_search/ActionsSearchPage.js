import {useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Container} from '../../components/Container';
import {Row} from '../../components/Row';
import {SquareButton} from '../../components/SquareButton';
import ContractEdit from './../../../assets/svg/contract-edit.svg';
import AddCheckOutline from './../../../assets/svg/add-check-outline.svg';
import {useSurveys} from '../../modules/SurveysContext';

const ActionsSearchPage = ({navigation, route}) => {
  const {surveyId, userId} = route.params;
  const {findSurveyById, surveys} = useSurveys();
  const survey = useMemo(() => findSurveyById(surveyId), [surveys]);

  useEffect(() => {
    navigation.setOptions({
      title: survey.name ?? 'Sem título',
    });
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <Row style={styles.row}>
        <SquareButton
          icon="history-edu"
          title="Modificar"
          typeIcon="svg"
          BaseSvg={ContractEdit}
          styleIcon={styles.button.icon}
          styleTitle={styles.button.title}
          styleButton={styles.button}
          onTap={() =>
            navigation.navigate('modify-search', {
              type: 'UPDATE',
              surveyId,
              userId,
            })
          }
        />
        <SquareButton
          icon="library-add-check"
          title="Coletar dados"
          typeIcon="svg"
          BaseSvg={AddCheckOutline}
          styleIcon={styles.button.icon}
          styleTitle={styles.button.title}
          styleButton={styles.button}
          onTap={() =>
            navigation.navigate('satisfying-collect', {
              surveyId,
              userId,
            })
          }
        />
        <SquareButton
          icon="donut-large"
          title="Relatório"
          styleIcon={styles.button.icon}
          styleTitle={styles.button.title}
          styleButton={styles.button}
          onTap={() => navigation.navigate('chart-report', {surveyId})}
        />
      </Row>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-evenly',
  },
  button: {
    icon: {
      color: 'white',
      fontSize: 80,
    },
    title: {
      marginTop: 10,
      color: 'white',
      fontSize: 28,
    },
    backgroundColor: '#312464',
    width: 220,
    height: 190,
  },
});

export {ActionsSearchPage};
