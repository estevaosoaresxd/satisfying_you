import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Container} from '../../components/Container';
import {Row} from '../../components/Row';
import {SquareButton} from '../../components/SquareButton';

const ActionsSearchPage = ({navigation, route}) => {
  const {title} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: title ?? 'Sem título',
    });
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <Row style={styles.row}>
        <SquareButton
          icon="history-edu"
          title="Modificar"
          styleIcon={styles.button.icon}
          styleTitle={styles.button.title}
          styleButton={styles.button}
          onTap={() =>
            navigation.navigate('modify-search', {
              type: 'UPDATE',
            })
          }
        />
        <SquareButton
          icon="library-add-check"
          title="Coletar dados"
          styleIcon={styles.button.icon}
          styleTitle={styles.button.title}
          styleButton={styles.button}
          onTap={() => navigation.navigate('satisfying-collect')}
        />
        <SquareButton
          icon="donut-large"
          title="Relatório"
          styleIcon={styles.button.icon}
          styleTitle={styles.button.title}
          styleButton={styles.button}
          onTap={() => navigation.navigate('chart-report')}
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
      fontSize: 90,
      marginBottom: 10,
    },
    title: {
      color: 'white',
      fontSize: 28,
    },
    backgroundColor: '#312464',
    width: 220,
    height: 190,
  },
});

export {ActionsSearchPage};
