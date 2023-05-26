import './Header.css';

function Header({ score, topScore }) {
  return (
    <header>
      <div>
        <h1>Space Memory Game</h1>
        <h2>
          Get points by clicking on an image but don&apos;t click a card more
          than once!
        </h2>
      </div>
      <div>
        <ul>
          <li>
            Current Score: <span className="info">{score}</span>
          </li>
          <li>
            Top Score: <span className="info">{topScore}</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
