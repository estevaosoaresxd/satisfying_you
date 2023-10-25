import 'react-native-gesture-handler';
import React from 'react';
import {SurveysProvider} from './modules/SurveysContext';
import {Router} from './shared/routes/Router';
import {AuthProvider} from './modules/AuthContext';

export const App = () => {
  return (
    <AuthProvider>
      <SurveysProvider>
        <Router />
      </SurveysProvider>
    </AuthProvider>
  );
};
