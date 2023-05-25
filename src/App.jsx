import { useState } from 'react';
import Header from './components/header/Header';
import Board from './components/board/Board';
import planets from './utils/cards-index';
import getShuffledArray from './utils/shuffle-array';
import './App.css';

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
