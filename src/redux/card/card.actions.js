import CardActionTypes from './card.types';


export const addCard = () => ({
  type: CardActionTypes.ADD_CARD
});

export const isDealer = () => ({
  type: CardActionTypes.IS_DEALER
});

export const restart = () => ({
  type: CardActionTypes.RESTART
});

export const gameStarted = () => ({
  type: CardActionTypes.GAME_STARTED
});


