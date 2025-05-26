// src/Result.js
import React from 'react';

const Result = ({ score, total, onRestart }) => {
  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default Result;
