import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import baseSvg from './../../../assets/svg/celebration.svg';

// COMPONENTS
import {Container} from '../../components/Container';
import {ButtonDefault} from '../../components/ButtonDefault';
import {InputSearch} from '../../components/InputSearch';
import {SquareButton} from '../../components/SquareButton';
import {AlertConfirm} from '../../components/AlertConfirm';

const DATA = [
  {
    icon: 'devices',
    title: 'SECOMP 2023',
    description: '10/10/2022',
    iconColor: '#704141',
  },
  {
    icon: 'account-group-outline',
    typeIcon: 'community',
    title: 'UBUNTU 2022',
    description: '05/06/2022',
    iconColor: '#383838',
  },
  {
    icon: 'woman',
    title: 'MENINAS CPU',
    description: '01/04/2022',
    iconColor: '#D71616',
  },
  {
    icon: 'umbrella-beach-outline',
    title: 'COTB',
    typeIcon: 'community',
    description: '01/04/2022',
    iconColor: '#37BD6D',
  },
  {
    BaseSvg: baseSvg,
    typeIcon: 'svg',
    title: 'CARNAVAL',
    description: '15/02/2020',
    iconColor: '#C60EB3',
  },
];

const HomePage = ({navigation, route}) => {
  const renderItem = ({
    icon,
    typeIcon,
    BaseSvg,
    title,
    description,
    iconColor,
  }) => (
    <SquareButton
      icon={icon}
      title={title}
      onTap={() =>
        navigation.navigate('actions-search', {
          title: title,
        })
      }
      BaseSvg={baseSvg}
      typeIcon={typeIcon}
      description={description}
      styleButton={styles.flatlist.button}
      styleIcon={{...styles.flatlist.button.icon, color: iconColor}}
      styleTitle={styles.flatlist.button.title}
      styleDescription={styles.flatlist.description}
    />
  );

  const separator = (
    <View
      style={{
        height: '100%',
        width: 30,
      }}
    />
  );

  return (
    <Container style={styles.container}>
      <InputSearch
        placeholder="Insira o termo de busca..."
        styleRow={styles.inputSearch}
      />
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={() => separator}
        style={styles.flatlist}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlist.content}
      />
      <AlertConfirm showAlert={false} />
      <ButtonDefault
        text="NOVA PESQUISA"
        style={styles.buttonNewSearch}
        onTap={() =>
          navigation.navigate('modify-search', {
            type: 'NEW',
          })
        }
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  flatlist: {
    content: {
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    button: {
      width: 190,
      height: 160,
      icon: {
        fontSize: 80,
      },
      title: {
        color: '#3F92C5',
        fontSize: 26,
      },
      description: {
        fontSize: 12,
      },
    },
  },
  inputSearch: {
    marginHorizontal: 20,
  },
  buttonNewSearch: {
    backgroundColor: '#37BD6D',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});

export {HomePage};
