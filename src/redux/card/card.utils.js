

export const addCard = (state) => {
  
  var hand = [];
  var cards = [];
  var isDealer = state.isDealer;
  var dealerCards = [];
  var playerCards = [];
  var dealerPoints = 0;
  var playerPoints = 0;
  
  hand.push(
    state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0]
  );

  isDealer ? cards = state.dealerCards : cards = state.playerCards;
  cards.push(hand[0]);
  const gamer = calculatePointsCards(cards);  


  if (isDealer) {
    dealerCards = gamer[0];
    dealerPoints = gamer[1];
    playerCards = state.playerCards;
    playerPoints = state.playerPoints;
  } else {
    dealerCards = state.dealerCards;
    dealerPoints = state.dealerPoints;
    playerCards = gamer[0];
    playerPoints = gamer[1];
  }

  const {victory, lost} = checkWinner(dealerPoints,playerPoints, isDealer); 

  return { dealerCards, dealerPoints, playerCards, playerPoints, victory, lost };

};

export const giveInizialeCards = (state) => { 
  
  //Asign card to player
  var playerCards = [];
  var playerPoints = 0;

  //Asign card to dealer
  var dealerCards = [];
  var dealerPoints = 0;

  dealerCards.push(
    state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0]
  );

  // calculate points of dealer 
  const dealer = calculatePointsCards(dealerCards);
  
  dealerCards = dealer[0];
  dealerPoints = dealer[1]; 

  // Asign cards to player (2)  
  playerCards.push(
    state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0]
  );
  playerCards.push(
    state.deck.splice(Math.floor(Math.random() * state.deck.length), 1)[0]
  );

  // calculate points of player
  const player = calculatePointsCards(playerCards);
  
  playerCards = player[0];
  playerPoints = player[1];  

  return { playerCards, playerPoints, dealerCards, dealerPoints };
  
};

export const calculatePointsCards = (cards) => {
 
  const val10 = ["J", "Q", "K"];
  var totalPoints = 0;

  // eslint-disable-next-line
  cards.map( (item, index) => {

    if(val10.includes(item)){
        totalPoints = totalPoints + 10;
        
    // eslint-disable-next-line
    }else if(item == "A"){

        if(totalPoints < 11){
            totalPoints = totalPoints + 11;

        }else{
            totalPoints = totalPoints + 1;
            cards[index] = "1";
        }

    }else{
        totalPoints = totalPoints + parseInt(item);
    }

  });

  if (totalPoints > 21) {
    //checkCards if there is an A to modify the total points
    if (cards.includes('A')) {
      cards.splice(cards.indexOf('A'), 1, '1');
      totalPoints = totalPoints - 10;
    } 
  }

  return [cards , totalPoints]
 
};

export const checkWinner = (dealerPoints, playerPoints, isDealer) => {

  var victory = 0;
  var lost = 0;

  if (isDealer) {

    dealerPoints > 21 ? victory = 1 : dealerPoints >= playerPoints ? lost = 1 : lost = 0;
    
  } else {

    playerPoints > 21 ? lost = 1 :  lost = 0;
   
  }
  

  return {victory , lost}
 
};