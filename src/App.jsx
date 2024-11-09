import React, { useState } from 'react';
import WelcomeScreen from './components/Welcome';
import SurveyForm from './components/SurveyForm';

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="app">
      {!started ? (
        <WelcomeScreen onStart={() => setStarted(true)} />
      ) : (
        <SurveyForm />
      )}
    </div>
  );
};

export default App;
