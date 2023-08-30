import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Container} from '../../components/Container';
import {Row} from '../../components/Row';
import {Column} from '../../components/Column';
import {TextDefault} from '../../components/TextDefault';
import {ImagesAssets} from '../../../assets/images/ImagesAssets';

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
        <Image source={ImagesAssets.chart} style={styles.image} />
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
  container: {},
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
