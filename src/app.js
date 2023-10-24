import 'react-native-gesture-handler';
import React from 'react';
import {SurveysProvider} from './modules/SurveysContext';
import {Router} from './shared/routes/Router';

export const App = () => {
  return (
    <SurveysProvider>
      <Router />
    </SurveysProvider>
  );
};
