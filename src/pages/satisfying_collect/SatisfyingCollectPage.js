import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Container} from '../../components/Container';
import {TextDefault} from '../../components/TextDefault';
import {Row} from '../../components/Row';
import {SquareButton} from '../../components/SquareButton';
import {Column} from '../../components/Column';

const {width, height} = Dimensions.get('window');

const SatisfyingCollectPage = ({navigation, route}) => {
  const [showMessage, setShowMessage] = useState(false);
  const {title} = route.params;

  const onTapCollect = () => {
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 3000);
  };

  const satisfyingButtons = [
    {
      title: 'Péssimo',
      icon: 'emoticon-sad-outline',
      iconColor: '#D71616',
    },
    {
      title: 'Ruim',
      icon: 'emoticon-sad-outline',
      iconColor: '#FF360A',
    },
    {
      title: 'Neutro',
      icon: 'emoticon-neutral-outline',
      iconColor: '#FFC632',
    },
    {
      title: 'Bom',
      icon: 'emoticon-happy-outline',
      iconColor: '#37BD6D',
    },
    {
      title: 'Excelente',
      icon: 'emoticon-excited-outline',
      iconColor: '#25BC22',
    },
  ];

  return (
    <Container style={styles.container}>
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
            O que você achou do {title}?
          </TextDefault>
          <View style={{height: height * 0.125}} />
          <Row>
            {satisfyingButtons.map(button => (
              <SquareButton
                icon={button.icon}
                title={button.title}
                onTap={() => onTapCollect()}
                typeIcon="community"
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
