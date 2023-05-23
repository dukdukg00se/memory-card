import { useState } from 'react';
import Header from './components/header/Header';
import './App.css';

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <>
      <Header level={level} score={score} top={topScore} />
    </>
  );
}

export default App;
