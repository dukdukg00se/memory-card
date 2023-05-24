import './Board.css';

function Board({ cards, onClick }) {
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
              <figcaption></figcaption>
            </figure>
          );
        })}
      </div>
    </main>
  );
}

export default Board;
