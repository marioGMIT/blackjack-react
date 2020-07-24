import CardActionTypes from './card.types';
import { addCard, giveInizialeCards } from './card.utils';

let hearts = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const INITIAL_STATE = {
    dealerCards: [],
    playerCards: [],
    cardsArray: [...hearts, ...hearts, ...hearts, ...hearts],
    deck: [...hearts, ...hearts, ...hearts, ...hearts],
    hand: [],
    isDealer: 0,
    dealerPoints: 0,
    playerPoints: 0,
    victory: 0,
    lost: 0
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CardActionTypes.IS_DEALER:
        return {
            ...state,
            isDealer: !state.isDealer
        };    
    
    case CardActionTypes.RESTART:        
        var {playerCards, playerPoints, dealerCards, dealerPoints} = giveInizialeCards(state);
             
        return {
             ...state,
            isDealer: 0,
            victory: 0,
            lost: 0,
            dealerCards: dealerCards,
            playerCards: playerCards,
            dealerPoints: dealerPoints,
            playerPoints: playerPoints,           

        };

    case CardActionTypes.ADD_CARD:  
       
        const result = addCard(state);
        
        return {
            ...state,
            playerCards: result.playerCards,
            playerPoints: result.playerPoints,
            dealerCards: result.dealerCards,
            dealerPoints: result.dealerPoints,
            victory: result.victory,
            lost: result.lost,
        };       
    
    case CardActionTypes.GAME_STARTED:
        return {
            ...state,
            gameStarted: !state.gameStarted
        };
    
    default:
      return state;
  }
};

export default cardReducer;