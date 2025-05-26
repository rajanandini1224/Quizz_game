// src/App.js
import React, { useState, useEffect } from 'react';
import { questions } from './data';
import Quiz from './Quiz';
import Result from './Result';
import SubjectSelector from './SubjectSelector';
import AnswerReview from './AnswerReview';
import './App.css';

function App() {
  const [subject, setSubject] = useState(null);
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [history, setHistory] = useState([]);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("scoreHistory")) || [];
    setHistory(saved);
  }, []);

  const handleQuizEnd = (finalScore, answerList) => {
    setAnswers(answerList);
    const record = {
      date: new Date().toLocaleString(),
      subject,
      score: finalScore,
      total: questions[subject].length
    };
    const updated = [record, ...history];
    setHistory(updated);
    localStorage.setItem("scoreHistory", JSON.stringify(updated));
    setScore(finalScore);
  };

  const handleRestart = () => {
    setSubject(null);
    setScore(null);
    setAnswers([]);
    setShowReview(false);
  };

  if (!subject) return <SubjectSelector onSelect={setSubject} />;

  if (score !== null && !showReview) {
    return (
      <div>
        <Result score={score} total={questions[subject].length} onRestart={handleRestart} />
        <button onClick={() => setShowReview(true)}>Review Answers</button>
<h3>Previous Scores</h3>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
  {history.map((item, index) => (
    <div
      key={index}
      style={{
        border: "1px solid #ccc",
        padding: "10px 15px",
        borderRadius: "8px",
        width: "80%",
        maxWidth: "500px",
        backgroundColor: "#fafafa",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <p><strong>Date:</strong> {item.date}</p>
      <p><strong>Subject:</strong> {item.subject.toUpperCase()}</p>
      <p><strong>Score:</strong> {item.score}/{item.total}</p>
    </div>
  ))}
</div>

      </div>
    );
  }

  if (showReview) {
    return <AnswerReview answers={answers} onRestart={handleRestart} />;
  }

  return <Quiz questions={questions[subject]} onQuizEnd={handleQuizEnd} />;
}

export default App;
