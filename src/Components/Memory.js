<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./styles/Memory.css";
import { doc, getDoc } from "firebase/firestore";
import db from "../database/firebaseConfig";

const definitions = [
  { Asset: "Something valuable that provides future benefit" },
  { Liability: "Financial debts owed to another party" },
  { Income: "Money received, especially regularly, from work or investments" },
  { Profit: "Financial gain when revenue exceeds expenses" },
  {
    Revenue: "Income from selling goods or services before deducting expenses",
  },
  { Stock: "Share of ownership in a corporation" },
  {
    Mortgage:
      "A mortgage is a property-buying loan. If not repaid, the lender can take the property.",
  },
  { Depreciation: "Decrease in an asset's value over time" },
=======
import React, { useState, useEffect } from 'react';

import './styles/Memory.css';

const definitions = [
  { Asset: 'Something valuable that provides future benefit' },
  { Liability: 'Financial debts owed to another party' },
  { Income: 'Money received, especially regularly, from work or investments' },
  { Profit: 'Financial gain when revenue exceeds expenses' },
  { Revenue: 'Income from selling goods or services before deducting expenses' },
  { Stock: 'Share of ownership in a corporation' },
  { Mortgage: 'A mortgage is a property-buying loan. If not repaid, the lender can take the property.' },
  { Depreciation: 'Decrease in an asset\'s value over time' },
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Memory() {
  const [gameStarted, setGameStarted] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [totalFlips, setTotalFlips] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [cards, setCards] = useState([]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    generateGame();
  }, []);

  useEffect(() => {
    if (gameStarted) {
      const timer = setInterval(() => {
<<<<<<< HEAD
        setTotalTime((prevTime) => prevTime + 1);
=======
        setTotalTime(prevTime => prevTime + 1);
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted]);

  const generateGame = () => {
    let cardPairs = [];
<<<<<<< HEAD
    definitions.forEach((def) => {
      const [term, definition] = Object.entries(def)[0];
      cardPairs.push({ content: term, type: "term", matched: false });
      cardPairs.push({
        content: definition,
        type: "definition",
        matched: false,
      });
=======
    definitions.forEach(def => {
      const [term, definition] = Object.entries(def)[0];
      cardPairs.push({ content: term, type: 'term', matched: false });
      cardPairs.push({ content: definition, type: 'definition', matched: false });
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
    });

    setCards(shuffleArray(cardPairs));
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const flipCard = (index) => {
    if (!gameStarted) {
      startGame();
    }

    if (flippedCards.includes(index) || cards[index].matched) return;

    setTotalFlips(totalFlips + 1);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.type !== secondCard.type) {
<<<<<<< HEAD
        const matchingDefinition = definitions.find(
          (def) =>
            Object.entries(def)[0][0] ===
            (firstCard.type === "term" ? firstCard.content : secondCard.content)
=======
        const matchingDefinition = definitions.find(def => 
          Object.entries(def)[0][0] === (firstCard.type === 'term' ? firstCard.content : secondCard.content)
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
        );

        if (matchingDefinition) {
          const [term, definition] = Object.entries(matchingDefinition)[0];
<<<<<<< HEAD
          if (
            (firstCard.content === term && secondCard.content === definition) ||
            (firstCard.content === definition && secondCard.content === term)
          ) {
=======
          if ((firstCard.content === term && secondCard.content === definition) ||
              (firstCard.content === definition && secondCard.content === term)) {
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
            const newCards = [...cards];
            newCards[firstIndex].matched = true;
            newCards[secondIndex].matched = true;
            setCards(newCards);

<<<<<<< HEAD
            if (newCards.every((card) => card.matched)) {
=======
            if (newCards.every(card => card.matched)) {
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
              setWin(true);
            }
          }
        }
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="game">
      <div className="controls">
<<<<<<< HEAD
        <button onClick={startGame} disabled={gameStarted}>
          Start
        </button>
=======
        <button onClick={startGame} disabled={gameStarted}>Start</button>
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
        <div className="stats">
          <div className="moves">{totalFlips} moves</div>
          <div className="timer">Time: {totalTime} sec</div>
        </div>
      </div>
      <div className="board-container">
<<<<<<< HEAD
        <div
          className="board"
          data-dimension="4"
          style={{ gridTemplateColumns: `repeat(${4}, auto)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${
                flippedCards.includes(index) || card.matched ? "flipped" : ""
              }`}
=======
        <div className="board" data-dimension="4" style={{ gridTemplateColumns: `repeat(${4}, auto)` }}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`card ${flippedCards.includes(index) || card.matched ? 'flipped' : ''}`} 
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
              onClick={() => flipCard(index)}
            >
              <div className="card-front"></div>
              <div className="card-back">{card.content}</div>
            </div>
          ))}
        </div>
        {win && (
          <div className="win">
            <span className="win-text">
<<<<<<< HEAD
              You won!
              <br />
              with <span className="highlight">{totalFlips}</span> moves
              <br />
=======
              You won!<br />
              with <span className="highlight">{totalFlips}</span> moves<br />
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
              under <span className="highlight">{totalTime}</span> seconds
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Memory;
=======
export default Memory;
>>>>>>> cc917d13c73ca7fd4ede3b31d26bedb183648bc4
