import React from 'react';
import { Link } from 'react-router-dom';
// import './DeckListStyles.css';
const Deck = ({ decks, deleteThisDeck }) => {
  const list = decks.map((deck, index) => {
    return (
      <div className="deckWrapper">
        <div className="deckHeader">
          <h2>{deck.name}</h2>
          <p className="deckSubText">{deck.cards.length} cards</p>
        </div>
        <p className="deckDescription">{deck.description}</p>
        <div className="deckButtonsWrapper">
          <Link to={`/decks/${deck.id}`}
            className="viewBtn"
            >
              View
            </Link>
          <Link to={`/decks/${deck.id}/study`}
            className="studyBtn"
            >
              Study
            </Link>
          <button onClick={() => deleteThisDeck(deck.id)}
            className="trashBtn"
            >
              Delete
            </button>
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className="createBtnWrapper">
        <Link to="/decks/new" className="createNewBtn">
          Create New
        </Link>
      </div>
      <div className="listWrapper">
        {list}
      </div>
    </div>
  )
}

export default Deck;
