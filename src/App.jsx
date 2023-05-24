import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Board from './components/board/Board';
import planets from './assets/cards-index';
import './App.css';

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [remembered, setRemembered] = useState([]);

  // useEffect(() => {
  //   const numbrOfCards = level * 3;
  //   const randomCards = [];

  //   for (let i = 0; i < numbrOfCards; i++) {
  //     while (randomCards.length <= i) {
  //       const index = Math.floor(Math.random() * planets.length);

  //       if (randomCards.includes(planets[index]) === false) {
  //         randomCards.push(planets[index]);
  //       }
  //     }
  //   }

  //   setCards(randomCards);
  // }, []);

  const displayCards = () => {
    const numbrOfCards = level * 3;
    const randomCards = [];

    for (let i = 0; i < numbrOfCards; i++) {
      while (randomCards.length <= i) {
        const index = Math.floor(Math.random() * planets.length);

        if (randomCards.includes(planets[index]) === false) {
          randomCards.push(planets[index]);
        }
      }
    }

    setCards(randomCards);
  };

  useEffect(displayCards, []);

  const handleGamePlay = (e) => {
    // console.log(e.target.closest('.card'));
    // console.log(cards);

    const clickedElem = e.target.closest('.card');
    cards.forEach((cardObj) => {
      if (cardObj.id === clickedElem.id) {
        let selectedCard = cardObj;
        if (remembered.includes(selectedCard)) {
          console.log('over');
          return;
        } else {
          setRemembered([...remembered, selectedCard]);
        }
      }
    });
  };

  return (
    <>
      <Header level={level} score={score} top={topScore} />
      <Board cards={cards} onClick={handleGamePlay} />
    </>
  );
}

export default App;
