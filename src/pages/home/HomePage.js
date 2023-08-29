import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

// COMPONENTS
import {Container} from '../../components/Container';
import {ButtonDefault} from '../../components/ButtonDefault';
import {InputSearch} from '../../components/InputSearch';
import {SquareButton} from '../../components/SquareButton';

const DATA = [
  {
    icon: 'devices',
    title: 'SECOMP 2023',
    description: '10/10/2022',
    iconColor: '#704141',
  },
  {
    icon: 'groups',
    title: 'UBUNTU 2022',
    description: '05/06/2022',
    isOutline: true,
    iconColor: '#383838',
  },
  {
    icon: 'woman',
    title: 'MENINAS CPU',
    description: '01/04/2022',
    iconColor: '#D71616',
  },
  {
    icon: 'beach-access',
    title: 'COTB',
    description: '01/04/2022',
    iconColor: '#37BD6D',
  },
  {
    icon: 'celebration',
    title: 'CARNAVAL',
    description: '15/02/2020',
    iconColor: '#C60EB3',
  },
];

const HomePage = ({navigation, route}) => {
  const renderItem = ({icon, title, description, isOutline, iconColor}) => (
    <SquareButton
      icon={icon}
      title={title}
      isOutline={isOutline}
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
      <ButtonDefault text="NOVA PESQUISA" style={styles.buttonNewSearch} />
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
