import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from '../../components/Container';
import { TextInput, DatePicker, Button } from 'react-native-paper';

const ModifySearchPage = ({ navigation, route }) => {
  const { type } = route.params;

  const getTitle = () => {
    switch (type) {
      case 'NEW':
        return 'Nova Pesquisa';
      case 'UPDATE':
        return 'Modificar Pesquisa';
      default:
        return 'Sem título';
    }
  };

  const [nome, setNome] = React.useState('');
  const [data, setData] = React.useState(new Date());

  const handleNomeChange = (text) => {
    setNome(text);
  };

  const handleDataChange = (data) => {
    setData(data);
  };

  const handleCadastro = () => {
    // Fazer algo para cadastrar a pesquisa
  };

  React.useEffect(() => {
    navigation.setOptions({
      title: getTitle(),
    });
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <TextInput
        label="Nome"
        value={nome}
        onChange={handleNomeChange}
      />
      <DatePicker
        value={data}
        onChange={handleDataChange}
      />
      <Button
        title="Cadastrar"
        onPress={handleCadastro}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export { ModifySearchPage };
