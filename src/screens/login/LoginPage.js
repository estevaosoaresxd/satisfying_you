import React from 'react';

import {Row} from '../../components/Row';
import {Text} from 'react-native';
import {Container} from '../../components/Container';

export const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Text></Text> <Icon />
      </Row>
      <InputValidator></InputValidator>
      <InputValidator></InputValidator>
    </Container>
  );
};
