<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./styles/QuizComponent.css";
import { doc, getDoc } from "firebase/firestore";
import db from "../database/firebaseConfig";
=======
import React, { useState, useEffect } from 'react';
import './styles/QuizComponent.css';

const Quiz = () => {
  const questions = [
    
  ];
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // Set the time limit per question
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const docRef = doc(db, "budget-basics", "1");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const quizData = docSnap.data();
          const tempData = [
            quizData.quiz1,
            quizData.quiz2,
            quizData.quiz3,
            quizData.quiz4,
            quizData.quiz5,
          ];
          setQuestions(tempData);
          console.log(tempData);
        } else {
          console.log("No such document found!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timerRunning, timeLeft, handleNextQuestion]);

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion]?.answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(15); // Reset timer for the next question
    } else {
      setShowScore(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  if (!questions.length) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score</h2>
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button
            className="restart-button"
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-number">
<<<<<<< HEAD
              {/* Check if the current question exists */}
              Question{" "}
              {questions[currentQuestion]?.number || currentQuestion + 1}
=======
              Question {questions[currentQuestion].number}
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
            </div>
            <div className="question-text">
              {questions[currentQuestion]?.question}
            </div>
            <div className="timer">Time Left: {timeLeft} seconds</div>
          </div>
          <div className="options-section">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default QuizComponent;
