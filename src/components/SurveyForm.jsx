import React, { useState } from 'react';
import Question from './Question';

const surveyQuestions = [
  { id: 1, text: 'How satisfied are you with our products?', type: 'rating', scale: 5 },
  { id: 2, text: 'How fair are the prices compared to similar retailers?', type: 'rating', scale: 5 },
  { id: 3, text: 'How satisfied are you with the value for money of your purchase?', type: 'rating', scale: 5 },
  { id: 4, text: 'On a scale of 1-10, how likely are you to recommend us?', type: 'rating', scale: 10 },
  { id: 5, text: 'What could we do to improve our service?', type: 'text' },
];

const SurveyForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});

  const handleAnswer = (id, answer) => {
    setResponses((prev) => ({ ...prev, [id]: answer }));
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, surveyQuestions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleSubmit = () => {
    console.log('Survey Responses:', responses);
    alert('Thank you for your feedback!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Survey</h2>
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4">Question {currentQuestion + 1} / {surveyQuestions.length}</h3>
        <Question
          question={surveyQuestions[currentQuestion]}
          onAnswer={handleAnswer}
          response={responses[surveyQuestions[currentQuestion].id]}
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="bg-gray-400 text-white py-2 px-4 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <div className="flex gap-4">
          {currentQuestion < surveyQuestions.length - 1 && (
            <>
              <button
                onClick={handleSkip}
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
              >
                Skip
              </button>
              <button
                onClick={handleNext}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Next
              </button>
            </>
          )}
          {currentQuestion === surveyQuestions.length - 1 && (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
