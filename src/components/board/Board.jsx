import './Board.css';

function Board({ cards, onClick }) {
  const getCaption = (str) => {
    // const regex = /(?<=\.\/cards\/).*?(?=\.(jpg|webp|png))/g;
    // return str.match(regex).join('');

    const regex = /\.\/cards\/(.*?)\.(jpg|webp|png)/;
    const result = str.match(regex);
    let matchedText;

    if (result) {
      matchedText = result[1];
    }

    return matchedText;
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
