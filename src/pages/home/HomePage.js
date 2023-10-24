import {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

// COMPONENTS
import {Container} from '../../components/Container';
import {ButtonDefault} from '../../components/ButtonDefault';
import {InputSearch} from '../../components/InputSearch';
import {SquareButton} from '../../components/SquareButton';

// FIREBASE
import {onSnapshot} from 'firebase/firestore';
import {getQuerySurvey} from '../../services/firestore_service';

const HomePage = ({navigation, route}) => {
  const [surveys, setSurveys] = useState([]);

  const renderItem = survey => (
    <SquareButton
      title={survey.name}
      onTap={() =>
        navigation.navigate('actions-search', {
          survey: survey,
        })
      }
      image={survey.image}
      typeIcon="img"
      description={survey.date}
      styleButton={styles.flatlist.button}
      styleIcon={{...styles.flatlist.button.icon}}
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

  const getAllSurveys = async () => {
    onSnapshot(getQuerySurvey(), querySnapshot => {
      const surveys = [];

      querySnapshot.forEach(doc => {
        surveys.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setSurveys(surveys);
    });
  };

  useEffect(() => {
    getAllSurveys();
  }, []);

  return (
    <Container style={styles.container}>
      <InputSearch
        placeholder="Insira o termo de busca..."
        styleRow={styles.inputSearch}
      />
      <FlatList
        horizontal={true}
        data={surveys}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={() => separator}
        style={styles.flatlist}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlist.content}
      />

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
