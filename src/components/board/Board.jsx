import './Board.css';

function Board({ cards, onClick }) {
  const getCaption = (str) => {
    const regex = /(?<=\.\/cards\/).*?(?=\.(jpg|webp|png))/g;
    return str.match(regex).join('');
  };

  return (
    <main>
      <div className="card-container">
        {cards.map((card) => {
          return (
            <figure
              key={card.id}
              id={card.id}
              onClick={onClick}
              className="card"
            >
              <img src={card.src} />
              <figcaption>{getCaption(card.src)}</figcaption>
            </figure>
          );
        })}
      </div>
    </main>
  );
}

export default Board;
