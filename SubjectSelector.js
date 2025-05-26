// src/SubjectSelector.js
import React from "react";
import { questions } from "./data"; // Make sure this file has the subjects

const SubjectSelector = ({ onSelect }) => {
  const subjects = Object.keys(questions);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>Select a Subject</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column", // column layout
          alignItems: "center",
          gap: "15px", // space between buttons
          marginTop: "20px",
        }}
      >
        {subjects.map((subject, index) => (
          <button
            key={subject}
            onClick={() => onSelect(subject)}
            style={{
              width: "250px",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: "#e0e0e0",
              border: "1px solid #999",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;
