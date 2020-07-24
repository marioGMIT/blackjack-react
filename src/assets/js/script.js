// TODO: Mejorar contar cartas.

class AudioController {
    constructor() {
        this.bgMusic = new Audio('Assets/Audio/creepy.mp3');
        this.flipSound = new Audio('Assets/Audio/flip.wav');
        this.matchSound = new Audio('Assets/Audio/match.wav');
        this.victorySound = new Audio('Assets/Audio/victory.wav');
        this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        // this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}



class Blackjack {
    constructor(cards) {
        this.cardsArray = cards;
        this.deck = [...cards];
        this.hand = []; // Cards selected
        this.lastCard = '';
        this.isDealer = 1;
        this.cardsLeft = cards.length;
        this.dCards = [];
        this.pCards = [];

        // This variable is necessary to avoid to give the victory to the dealer when the game didn't started
        this.gameStarted = 0;
      
        this.dealerPoints = 0;
        this.playerPoints = 0;

        this.audioController = new AudioController();
    }
    startGame() {
        
        this.cleanCards();

        this.addCard();
        this.isDealer = 0;
        this.gameStarted = 1;
        this.addCard();
        this.addCard();        

    }

    cleanCards() {

        var playerCards = document.getElementById("player-cards");
        var dealerCards = document.getElementById("dealer-cards");

        playerCards.textContent = '';
        dealerCards.textContent = '';

        this.dCards = [];
        this.pCards = [];

        this.dealerPoints = 0;
        this.playerPoints = 0;
        this.hand = []; // Cards selected
        this.isDealer = 1;
        this.gameStarted = 0;

        //In case that it's required to initialize leftCards
        // this.cardsLeft = this.cardsArray.length;
        // this.deck = [... this.cardsArray];
        // cLeft.innerHTML = this.cardsLeft ;

        
    }
       
    gameOver() {
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }
    victory() {
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }

    
    addCard(){

        this.hand.push(this.deck.splice(Math.floor(Math.random() * this.deck.length), 1)[0]);
        
        this.lastCard =  this.hand.slice(-1).pop();

        this.isDealer ? this.dCards.push(this.lastCard) : this.pCards.push(this.lastCard);
       
        this.drawCard();
        this.countCards();       
        
    }

    drawCard() {

        this.cardsLeft--;

        var playerCards = document.getElementById("player-cards");
        var dealerCards = document.getElementById("dealer-cards");

        var cLeft = document.getElementById("cardsLeft");
        cLeft.innerHTML = this.cardsLeft;

        var cardValueDiv = document.createElement("div");
        cardValueDiv.classList.add("card-value");
        cardValueDiv.innerHTML = this.lastCard;

        var cardFrontDiv = document.createElement("div");
        cardFrontDiv.classList.add("card-front", "card-face");

        cardFrontDiv.appendChild(cardValueDiv); 

        var cardDiv = document.createElement("div");  
        cardDiv.classList.add("card", "visible");

        cardDiv.appendChild(cardFrontDiv); 

        this.isDealer ? dealerCards.appendChild(cardDiv) : playerCards.appendChild(cardDiv);
        
    }

    countCards() {

        var dealerPointsDiv = document.getElementById('dealer-points');
        var playerPointsDiv = document.getElementById('player-points');

        var val10 = ["J", "Q", "K"];

        this.playerPoints = 0;
        this.dealerPoints = 0;

        //Counting cards for player
        this.pCards.forEach( item => {

            if(val10.includes(item)){
                this.playerPoints = this.playerPoints + 10;
            }else if( item == "A"){

                if ( this.playerPoints > 10) {
                    this.playerPoints = this.playerPoints + 1
                } else {
                    this.playerPoints = this.playerPoints + 11
                }
            }else{
                this.playerPoints =  this.playerPoints + parseInt(item);
            }
            
            if (this.playerPoints > 21) {                
                this.gameOver();                
            }           
        });
        // Counting cards for the dealer
        this.dCards.forEach( item => {

            if(val10.includes(item)){
                this.dealerPoints = this.dealerPoints + 10;
            }else if( item == "A"){

                if ( this.dealerPoints > 10) {
                    this.dealerPoints =+1
                } else {
                    this.dealerPoints =+11
                }
            }else{
                this.dealerPoints =  this.dealerPoints + parseInt(item);
            }            

            if (this.dealerPoints > 21) {                
                this.victory();               
            }   

        });  
        
        // Dealer victory when he draw or have better cards.
        if (this.dealerPoints >= this.playerPoints && this.isDealer && this.gameStarted && this.dealerPoints < 22) {
            this.gameOver();
        }

        // Displaying points
         playerPointsDiv.innerHTML=this.playerPoints;
         dealerPointsDiv.innerHTML=this.dealerPoints;       

    }
    
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let hit = document.getElementById('hit');
    let stick = document.getElementById('stick');

    let hearts = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let deck = [...hearts, ...hearts, ...hearts, ...hearts];

    let game = new Blackjack(deck);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });   

    game.startGame();

    
    hit.addEventListener('click', () => {
        game.addCard();
    });
    stick.addEventListener('click', () => {
        game.isDealer = 1;
    });

}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}