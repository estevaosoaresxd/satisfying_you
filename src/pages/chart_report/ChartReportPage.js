import {useState, useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container} from '../../components/Container';
import {Row} from '../../components/Row';
import {Column} from '../../components/Column';
import {TextDefault} from '../../components/TextDefault';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {useSurveys} from '../../modules/SurveysContext';

const options = [
  {
    name: 'terrible',
    color: '#53D8D8',
  },
  {
    name: 'bad',
    color: '#EA7288',
  },
  {
    name: 'neutral',
    color: '#5FCDA4',
  },
  {
    name: 'good',
    color: '#6994FE',
  },
  {
    name: 'great',
    color: '#F1CE7E',
  },
];

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 5, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const ChartReportPage = ({navigation, route}) => {
  const {surveyId} = route.params;
  const {findSurveyById, surveys} = useSurveys();
  const survey = useMemo(() => findSurveyById(surveyId), [surveys]);

  const [allVotes, setAllVotes] = useState([
    {
      name: 'noValue',
      value: 1,
      color: '#f0f0f0',
    },
  ]);

  const listOfData = () => {
    const data = [];

    options.forEach(e => {
      const value = survey[e.name];

      data.push({
        ...e,
        value,
      });
    });

    return data;
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Relatório',
    });
  }, [navigation]);

  useEffect(() => {
    const allData = listOfData();
    const allHaveVoted = allData.filter(e => e.value > 0);

    console.log(allData);

    if (allHaveVoted.length > 0) setAllVotes(allData);
  }, []);

  const AvalitionType = ({title, colorSquare}) => {
    return (
      <Row style={styles.avaliation}>
        <View style={{...styles.square, backgroundColor: colorSquare}} />
        <TextDefault style={styles.title}>{title}</TextDefault>
      </Row>
    );
  };

  return (
    <Container style={styles.container}>
      <Row>
        <View
          style={{
            width: 300,
            height: 300,
          }}>
          <PieChart
            data={allVotes}
            width={500}
            height={300}
            chartConfig={chartConfig}
            accessor={'value'}
            backgroundColor={'transparent'}
            hasLegend={false}
            absolute={false}
          />
        </View>
        <Column style={styles.column}>
          <AvalitionType title="Excelente" colorSquare="#F1CE7E" />
          <AvalitionType title="Bom" colorSquare="#6994FE" />
          <AvalitionType title="Neutro" colorSquare="#5FCDA4" />
          <AvalitionType title="Ruim" colorSquare="#EA7288" />
          <AvalitionType title="Péssimo" colorSquare="#53D8D8" />
        </Column>
      </Row>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    alignItems: 'flex-start',
  },
  avaliation: {
    marginBottom: 12,
  },
  image: {
    width: 300,
    height: 300,
    marginRight: 30,
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export {ChartReportPage};
