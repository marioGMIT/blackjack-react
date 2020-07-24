import React from 'react';

import {connect} from 'react-redux';

import { addCard, isDealer, restart }from '../../redux/card/card.actions';

import CustomButton from '../../components/custom-button/custom-button.component';

import CardList from '../../components/card-list/card-list.component';

import './homepage.styles.css';

export const Homepage = ({ dealerPoints, playerPoints, cardsLeft, dealerCards, playerCards, addCard, isDealer, isDealerChange, victory, lost, restart }) => (

   
    <div>
        <h1 className="page-title">Blackjack</h1>    
        <div id="game-over-text" className={ `${lost ? 'visible' : '' } overlay-text `}>
            You Lost
            <span className="overlay-text-small" onClick={ () => {
                        restart();                       
                }}>
                    Click to Restart
            </span>
        </div>
        <div id="victory-text"  className={ `${victory ? 'visible' : '' } overlay-text `}>
        Victory
            <span className="overlay-text-small" onClick={ () => {
                        restart();                       
                }} >
                    Click to Restart
            </span>
        </div>
        <div className="game-container">
            <div  className="game-info-container">           
                
                <div className={ `${isDealer ? 'highlight-user' : '' } game-info `} >
                    Dealer: <span id="dealer-points">{dealerPoints}</span>
                </div>
                <div className={ `${isDealer ? '' : 'highlight-user' } game-info `}>
                    Player: <span id="player-points" >{playerPoints}</span>
                </div>

                <CustomButton label="Hit" onClick={ () => {
                        addCard();                       
                }}/>

                <CustomButton label="Stick" onClick={ () => {
                        isDealerChange();                       
                }}/>

            </div>
    
            <div className="cards-container">

                <CardList name="Cards left"  label={cardsLeft}/>                        
                <CardList name="Dealer" items={dealerCards} />
                <CardList name="Player" items={playerCards} />
                
            </div>
        </div>
    </div>
);


const mapDispatchToProps = dispatch => ({
    addCard: () => dispatch(addCard()),
    isDealerChange: () => dispatch(isDealer()),
    restart: () => dispatch(restart())

  });

const mapStateToProps = state => ({
    dealerPoints: state.card.dealerPoints,
    playerPoints: state.card.playerPoints,
    cardsLeft: state.card.cardsLeft,
    dealerCards: state.card.dealerCards,
    playerCards: state.card.playerCards,
    victory: state.card.victory,
    lost: state.card.lost,
    isDealer: state.card.isDealer,
    cardsLeft : state.card.deck.length
  });

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);