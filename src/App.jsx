import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Board from './components/board/Board';
import planets from './assets/cards-index';
import './App.css';

// Util fn
function getShuffledArray(array) {
  let newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [cards, setCards] = useState(planets);
  const [savedCards, setSavedCards] = useState([]);

  const handleGamePlay = (e) => {
    let selectedCard;
    const clickedElem = e.target.closest('.card');
    cards.forEach((cardObj) => {
      if (cardObj.id === clickedElem.id) {
        selectedCard = cardObj;
      }
    });

    if (savedCards.includes(selectedCard)) {
      if (score > topScore) setTopScore(score);
      setScore(0);
      setSavedCards([]);
    } else {
      setSavedCards([...savedCards, selectedCard]);
      setScore(score + 1);
    }

    setCards(getShuffledArray(planets));
  };

  return (
    <>
      <Header score={score} topScore={topScore} />
      <Board cards={cards} onClick={handleGamePlay} />
    </>
  );
}

export default App;
