import React, { useState, useEffect } from 'react';
import './styles/QuizComponent.css';

const Quiz = () => {
  const questions = [
    {
      numb: 1,
      question: "John received a job offer with a starting salary of $60,000 per year. His employer offers a 401(k) retirement plan with a 3% employer match. If John contributes 6% of his salary to his 401(k), how much will his employer contribute annually?",
      answer: "$2,400",
      options: [
        "$1,800",
        "$3,600",
        "$1,200",
        "$2,400"
      ]
    },
    {
      numb: 2,
      question: "Emily is considering trading stocks actively in the market. Which of the following factors should she consider before engaging in active trading?",
      answer: "All of the above",
      options: [
        "Historical stock prices",
        "Market trends and news",
        "Company fundamentals",
        "All of the above"
      ]
    },
    {
      numb: 3,
      question: "Tom is comparing two mutual funds for his retirement savings. Fund A has an expense ratio of 0.5%, while Fund B has an expense ratio of 1.0%. All other factors being equal, which fund is likely to result in higher net returns for Tom over time?",
      answer: "Fund A",
      options: [
        "Fund A",
        "Fund B",
        "Both funds will result in the same net returns",
        "It depends on the performance of the funds"
      ]
    },
    {
      numb: 4,
      question: "Sarah is comparing two credit card offers. Card A has an annual fee of $50 and an interest rate of 15%, while Card B has no annual fee and an interest rate of 18%. Sarah typically carries a balance on her credit card. Which card would likely be the better choice for her?",
      answer: "Card B",
      options: [
        "Card A",
        "Card B",
        "Both cards are equally good",
        "It depends on Sarah's spending habits"
      ]
    },
    {
      numb: 5,
      question: "Julia is considering trading cryptocurrency. She's aware of the high volatility in the cryptocurrency market and wants to minimize her risk exposure while still participating in potential price movements. What trading strategy could she use to achieve this goal?",
      answer: "Hedging",
      options: [
        "Scalping",
        "Arbitrage",
        "Hedging",
        "Momentum trading"
      ]
    },
    {
      numb: 6,
      question: "What is the primary purpose of diversifying an investment portfolio?",
      answer: "To reduce risk",
      options: [
        "To increase volatility",
        "To reduce risk",
        "To maximize returns at all costs",
        "To simplify investment management"
      ]
    },
    {
      numb: 7,
      question: "Which of the following is considered a fixed expense?",
      answer: "Rent",
      options: [
        "Rent",
        "Groceries",
        "Entertainment",
        "Gas"
      ]
    },
    {
      numb: 8,
      question: "What does an emergency fund typically cover?",
      answer: "3 to 6 months of living expenses",
      options: [
        "1 month of living expenses",
        "3 to 6 months of living expenses",
        "All annual expenses",
        "There is no standard"
      ]
    },
    {
      numb: 9,
      question: "Which investment is generally considered the safest?",
      answer: "U.S. Treasury Bonds",
      options: [
        "Stocks",
        "U.S. Treasury Bonds",
        "Corporate Bonds",
        "Real Estate"
      ]
    },
    {
      numb: 10,
      question: "What is the main disadvantage of using credit cards?",
      answer: "High-interest rates",
      options: [
        "Convenience",
        "High-interest rates",
        "Rewards programs",
        "Building credit"
      ]
    }
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
              Question {questions[currentQuestion].numb}
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
