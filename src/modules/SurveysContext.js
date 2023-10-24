import {createContext, useState, useContext} from 'react';

const SurveysContext = createContext({});

const SurveysProvider = ({children}) => {
  const [surveys, setSurveys] = useState([]);

  const findSurveyById = id => {
    if (surveys) {
      const survey = surveys.filter(survey => survey.id == id);

      return survey[0];
    }

    return null;
  };

  const updateSurveys = data => {
    setSurveys(data);
  };

  return (
    <SurveysContext.Provider value={{surveys, updateSurveys, findSurveyById}}>
      {children}
    </SurveysContext.Provider>
  );
};

const useSurveys = () => {
  const context = useContext(SurveysContext);

  if (!context) {
    throw new Error('useSurvey must be used within a SurveysContextProvider');
  }

  return context;
};

export {SurveysProvider, useSurveys};
