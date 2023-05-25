import './Header.css';

function Header({ score, topScore }) {
  return (
    <header>
      <h1>Space Cards Memory Game</h1>
      <p>
        Get points by clicking on an image but don&apos;t click a card more than
        once!
      </p>
      <div>
        <ul>
          <li>Current Score: {score}</li>
          <li>Top Score: {topScore}</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
