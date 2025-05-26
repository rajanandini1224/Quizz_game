// src/Quiz.js
import React, { useState, useEffect } from "react";

const Quiz = ({ questions, onQuizEnd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerList, setAnswerList] = useState([]);
  const [timer, setTimer] = useState(15);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = (option) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) setScore(score + 1);

    setAnswerList([
      ...answerList,
      {
        question: currentQuestion.question,
        options: currentQuestion.options,
        selected: option,
        correct: currentQuestion.answer,
      },
    ]);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      // Record skipped question
      setAnswerList([
        ...answerList,
        {
          question: currentQuestion.question,
        //   options: currentQuestion.options,
          selected: null,
          correct: currentQuestion.answer,
        },
      ]);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setTimer(15);
    } else {
      onQuizEnd(score, answerList);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Question {currentIndex + 1} of {questions.length}</h2>
      <p style={{ fontSize: "18px" }}>{currentQuestion.question}</p>
      <div style={{ marginBottom: "20px", fontWeight: "bold" }}>Time left: {timer}s</div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={!!selectedAnswer}
            style={{
              margin: "10px",
              padding: "10px 20px",
              width: "300px",
              fontSize: "16px",
              backgroundColor:
                selectedAnswer === option
                  ? option === currentQuestion.answer
                    ? "lightgreen"
                    : "salmon"
                  : "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: selectedAnswer ? "not-allowed" : "pointer",
              textAlign: "left",
            }}
          >
            {index + 1}. {option}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <button
          onClick={handleNext}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Quiz;
