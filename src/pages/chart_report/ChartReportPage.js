import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Container} from '../../components/Container';
import {Row} from '../../components/Row';
import {Column} from '../../components/Column';
import {TextDefault} from '../../components/TextDefault';
import {PieChart} from 'react-native-chart-kit';

import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const data = [
  {
    name: 'Excelente',
    search: 20,
    color: '#F1CE7E',
  },
  {
    name: 'Bom',
    search: 25,
    color: '#6994FE',
  },
  {
    name: 'Neutro',
    search: 30,
    color: '#5FCDA4',
  },
  {
    name: 'Ruim',
    search: 20,
    color: '#EA7288',
  },
  {
    name: 'Péssimo',
    search: 15,
    color: '#53D8D8',
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
  React.useEffect(() => {
    navigation.setOptions({
      title: 'Relatório',
    });
  }, [navigation]);

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
            data={data}
            width={500}
            height={300}
            chartConfig={chartConfig}
            accessor={'search'}
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
