import React, { useState, useEffect } from 'react';
import '../cardmeister.github.io-master 2/elements.cardmeister.full';
import { shuffle } from 'lodash';
import './Game.css'


const Game = () => {
  const deck = [
    {rank: "Ace", suit: "Spades"},{rank: "2", suit: "Spades"},{rank: "3", suit: "Spades"},
    {rank: "4", suit: "Spades"},{rank: "5", suit: "Spades"},{rank: "6", suit: "Spades"},
    {rank: "7", suit: "Spades"},{rank: "8", suit: "Spades"},{rank: "9", suit: "Spades"},
    {rank: "10", suit: "Spades"},{rank: "Jack", suit: "Spades"},{rank: "Queen", suit: "Spades"},
    {rank: "King", suit: "Spades"},{rank: "Ace", suit: "Hearts"},{rank: "2", suit: "Hearts"},
    {rank: "3", suit: "Hearts"},{rank: "4", suit: "Hearts"},{rank: "5", suit: "Hearts"},
    {rank: "6", suit: "Hearts"},{rank: "7", suit: "Hearts"},{rank: "8", suit: "Hearts"},
    {rank: "9", suit: "Hearts"},{rank: "10", suit: "Hearts"},{rank: "Jack", suit: "Hearts"},
    {rank: "Queen", suit: "Hearts"},{rank: "King", suit: "Hearts"},{rank: "Ace", suit: "Diamonds"},
    {rank: "2", suit: "Diamonds"},{rank: "3", suit: "Diamonds"},{rank: "4", suit: "Diamonds"},
    {rank: "5", suit: "Diamonds"},{rank: "6", suit: "Diamonds"},{rank: "7", suit: "Diamonds"},
    {rank: "8", suit: "Diamonds"},{rank: "9", suit: "Diamonds"},{rank: "10", suit: "Diamonds"},
    {rank: "Jack", suit: "Diamonds"},{rank: "Queen", suit: "Diamonds"},{rank: "King", suit: "Diamonds"},
    {rank: "Ace", suit: "Clubs"},{rank: "2", suit: "Clubs"},{rank: "3", suit: "Clubs"},
    {rank: "4", suit: "Clubs"},{rank: "5", suit: "Clubs"},{rank: "6", suit: "Clubs"},
    {rank: "7", suit: "Clubs"},{rank: "8", suit: "Clubs"},{rank: "9", suit: "Clubs"},
    {rank: "10", suit: "Clubs"},{rank: "Jack", suit: "Clubs"},{rank: "Queen", suit: "Clubs"},{rank: "King", suit: "Clubs"}
  ];
  
  const twoDecks = deck.concat(deck);
  const shuffledDeck = shuffle(twoDecks);

  const [randomizedDeck, setRandomizedDeck] = useState(shuffledDeck);
  
  const [dealerCards, setDealerCards] = useState([]);
  const [dealerCount, setDealerCount] = useState(0); //the score associated with with delearCards to decide who the winner is if there is any
  const [playersCards, setPlayersCards] = useState([]); //an array containing all of playersCard, starting initially with two
  const [playerCount, setPlayerCount] = useState(0); //the score associated with the players cards to decide who the winner is if there is any
  const [isBlackjack, setIsBlackJack] = useState(false); //keeps track of whether or not a blackjack has occured(Ace paired with..) used in conjunction with winner state
  const [isPlayerBusted, setIsPlayerBusted] = useState(false);//if the player scores over 21
  const [isDealersTurn, setIsDealersTurn] = useState(false); //informs our app whose turn it is
  const [isDealerBusted, setIsDealerBusted] = useState(false); //if the dealer scores over 21 
  const [isHandComplete, setIsHandComplete] = useState(true);//if a winning event happens like blackjack or bust
  const [winner, setWinner] = useState("");
  const [cardsDealt, setCardsDealt] = useState(false);

  const dealCards = () => {
    setIsDealersTurn(false);
    setIsHandComplete(false);
  
    const newPlayersCards = randomizedDeck.slice(0, 2).map((card, index) => ({
      ...card,
      facingUp: true // All player cards are face up
    }));
    const newDealerCards = randomizedDeck.slice(2, 4).map((card, index) => ({
      ...card,
      facingUp: index === 0 ? false : true // Only the first dealer card is face down
    }));
  
    setPlayersCards(newPlayersCards);
    setDealerCards(newDealerCards);
    setRandomizedDeck(randomizedDeck.slice(4));
    
    setPlayerCount(calculateHand(newPlayersCards));
    setDealerCount(calculateHand(newDealerCards));
    setCardsDealt(true);
  };
  
  const calculateHand = (cards) => {
    

    let count = 0;
    let hasAce = false;
  
    for (let i = 0; i < cards.length; i++) {
      if (!cards[i].facingUp) continue;
  
      const rank = cards[i].rank;
  
      if (rank === "Ace") {
        hasAce = true;
        continue;
      }
  
      if (rank === "King" || rank === "Queen" || rank === "Jack") {
        count += 10;
      } else {
        count += parseInt(rank);
      }
    }
  
    if (hasAce && count + 10 <= 21) {
      count += 10;
    }
    console.log(count);
    
    return count;
    
  }

  const drawCard = () => {
    const card = randomizedDeck.shift();
    const newPlayerCards = [...playersCards, card];
    setPlayersCards(newPlayerCards);
    // console.log(newPlayerCards);
    
    setPlayerCount(calculateHand(newPlayerCards))
    // console.log(playerCount)
    
  };

  useEffect(() => {
    if (playerCount > 21) {
      setWinner("You busted! Dealer wins.");
    }
  }, [playerCount]);

  
  const hit = () => {
    if (winner === "") { // check if the game is still in progress
        drawCard();
    }
  };
  

  const stand = () => {
    isDealersTurn(true);
  }
  
  return (
    <div className="gameBoard">
      <div className="dealerCards">
        <div className="cardSection">
          {dealerCards.map((card, index) => (
            <div key={index} className="cardWrapper">
              {index === 0 && !isDealersTurn ? (
                <card-t rank="0" backtext="BACK" />
              ) : (
                <card-t rank={card.rank} suit={card.suit} />
              )}
            </div>
          ))}
        </div>
        {cardsDealt && (
          <div className="countContainer">
            <div className="countBox">
              <div className="countLabel">Dealer</div>
              <div className="countValue">{calculateHand(dealerCards)}</div>
            </div>
          </div>
        )}
      </div>
      <div className="playerCards">
        <div className="cardSection">
          {playersCards.map((card, index) => (
            <div key={index} className="cardWrapper">
              <card-t rank={card.rank} suit={card.suit} />
            </div>
          ))}
        </div>
        {cardsDealt && (
          <div className="countContainer">
            <div className="countBox">
              <div className="countLabel">Player</div>
              <div className="countValue">{calculateHand(playersCards)}</div>
            </div>
          </div>
        )}
      </div>
      {!cardsDealt && <button onClick={dealCards}>Deal</button>}
      <div className="playerAction" >
        {cardsDealt && <button onClick={hit} id="hitButton">Hit</button>}
        {cardsDealt && !isDealersTurn && <button onClick={stand} id="hitButton">Stand</button>}
      </div>
    </div>
  );
};

export default Game;