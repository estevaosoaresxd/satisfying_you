import {useEffect, useMemo, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

// COMPONENTS
import {Container} from '../../components/Container';
import {ButtonDefault} from '../../components/ButtonDefault';
import {InputSearch} from '../../components/InputSearch';
import {SquareButton} from '../../components/SquareButton';

// FIREBASE
import {onSnapshot} from 'firebase/firestore';
import {getQuerySurvey, pathSurvey} from '../../services/firestore_service';
import {useSurveys} from '../../modules/SurveysContext';
import {useAuth} from '../../modules/AuthContext';
import {dateFormat} from '../../shared/utils/date_format';

const HomePage = ({navigation, route}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const {surveys, updateSurveys} = useSurveys();
  const {user} = useAuth();

  const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      let filtered = data.filter(survey =>
        survey.name.toLowerCase().includes(query),
      );

      return filtered;
    }
  };

  const dataFiltered = useMemo(
    () => filterData(searchQuery, surveys),
    [searchQuery, surveys],
  );

  const renderItem = survey => (
    <SquareButton
      title={survey.name}
      onTap={() =>
        navigation.navigate('actions-search', {
          surveyId: survey.id,
          userId: user.uid,
        })
      }
      image={survey.image}
      typeIcon="img"
      description={dateFormat(new Date(survey.date))}
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
    onSnapshot(getQuerySurvey(user.uid), querySnapshot => {
      const surveys = [];

      querySnapshot.forEach(doc => {
        surveys.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      updateSurveys(surveys ?? []);
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
        onChange={setSearchQuery}
        value={searchQuery}
      />

      <FlatList
        horizontal={true}
        data={dataFiltered}
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
            userId: user.uid,
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
