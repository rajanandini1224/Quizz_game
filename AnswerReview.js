// src/AnswerReview.js
import React from 'react';

const AnswerReview = ({ answers = [], onRestart }) => {
  if (!Array.isArray(answers) || answers.length === 0) {
    return (
      <div>
        <h2>No answers to review.</h2>
        <button onClick={onRestart}>Play Again</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Answer Review</h2>
      {answers.map((q, i) => (
        <div
          key={i}
          style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}
        >
          <p><strong>Q{i + 1}:</strong> {q.question}</p>

          {Array.isArray(q.options) ? (
            q.options.map((opt, j) => (
              <div
                key={j}
                style={{
                  color:
                    opt === q.correct
                      ? 'green'
                      : opt === q.selected
                      ? 'red'
                      : 'black',
                  fontWeight:
                    opt === q.correct || opt === q.selected
                      ? 'bold'
                      : 'normal',
                }}
              >
                {opt} {opt === q.correct ? '(Correct)' : ''} {opt === q.selected ? '(Your Answer)' : ''}
              </div>
            ))
          ) : (
            <p style={{ color: 'red' }}>⚠️ Missing options for this question</p>
          )}
        </div>
      ))}
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default AnswerReview;
