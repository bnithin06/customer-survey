import React from 'react';

const Question = ({ question, onAnswer, response }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onAnswer(question.id, value);
  };

  return (
    <div>
      <h3>{question.text}</h3>
      {question.type === 'rating' ? (
        <div>
          {[...Array(question.scale)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={ratingValue} style={{ marginRight: '10px' }}>
                <input
                  type="radio"
                  value={ratingValue}
                  checked={response === ratingValue}
                  onChange={handleChange}
                />
                {ratingValue}
              </label>
            );
          })}
        </div>
      ) : (
        <textarea
          placeholder="Your feedback"
          value={response || ''}
          onChange={(e) => onAnswer(question.id, e.target.value)}
        />
      )}
    </div>
  );
};

export default Question;
