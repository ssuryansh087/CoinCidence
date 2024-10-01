import React, { useState, useEffect } from 'react';
import './styles/QuizComponent.css';

const Quiz = () => {
  const questions = [
    
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // Set the time limit per question
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timerRunning, timeLeft]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(15); // Reset timer for the next question
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score</h2>
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button className="restart-button" onClick={() => window.location.reload()}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-number">
              Question {questions[currentQuestion].number}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
            <div className="timer">
              Time Left: {timeLeft} seconds
            </div>
          </div>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedOption === option ? 'selected' : ''}`}
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

export default Quiz;
