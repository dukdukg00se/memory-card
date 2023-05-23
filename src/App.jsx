import { useState } from 'react';
import Header from './components/header/Header';
import Board from './components/board/Board';
import './App.css';

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <>
      <Header level={level} score={score} top={topScore} />
      <Board />
    </>
  );
}

export default App;
