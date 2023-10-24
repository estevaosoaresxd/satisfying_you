import {createContext, useContext} from 'react';

const SurveysContext = createContext([]);

const SurveysContextProvider = ({children, survey}) => {
  return (
    <SurveysContext.Provider value={survey}>{children}</SurveysContext.Provider>
  );
};

const useSurveys = () => {
  const context = useContext(SurveysContext);

  if (!context) {
    throw new Error('useSurvey must be used within a SurveysContextProvider');
  }

  return context;
};

const findSurveyById = id => {
  const surveys = useSurveys();

  console.log(surveys);

  if (surveys) {
    const survey = surveys.filter(survey => survey.id == id);

    return survey[0];
  }

  return null;
};

export {SurveysContextProvider, useSurveys, findSurveyById};
