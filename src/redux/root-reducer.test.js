import React, { PureComponent } from 'react'

import cardReducer from './card/card.reducer';
import CardActionTypes from './card/card.types';
import { addCard, isDealer } from './card/card.utils';

//TEST
// test points AA , 58A, A79
// test winner
    // draw
    // player +21
    // dealer > player


describe('Card Reducer', () => {

    let hearts = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    const INITIAL_STATE = {
        dealerCards: [],
        deck: ["3"],       
        isDealer: 1,
        dealerPoints: 0,
        victory: 0,
        lost: 0,
    };
    

    it('should return initial state ', () => {
        expect( cardReducer(INITIAL_STATE,{}) ).toEqual({isDealer: 1, victory: 0, deck: ["3"],dealerPoints: 0, dealerCards:[], lost: 0}, {})
    });

    it('should handle IS_DEALER action ', () => {
        expect( cardReducer(
            INITIAL_STATE,
            {
                type: CardActionTypes.IS_DEALER
            }
        ) ).toEqual({isDealer: false, victory:0, deck:["3"] ,dealerPoints: 0,dealerCards:[], lost: 0 })
    });
   

    it('should handle ADD_CARD action ', () => {
        expect( cardReducer(
            INITIAL_STATE,
            {
                type: CardActionTypes.ADD_CARD
            }
        ) ).toEqual({isDealer: 1, victory:0, deck:[], dealerPoints: 3, dealerCards:["3"], lost:0 })
    });


    it('Dealer A8 , Player A should be D-19 P-11 points Lost = 1', () => {

        const deck = ["8"];
        const mockDealerCards = ["A"];
        const mockPlayerCards = ["A"];

        expect( cardReducer(
            {...INITIAL_STATE, dealerCards: mockDealerCards, deck, playerCards: mockPlayerCards, playerPoints:11},
            {
                type: CardActionTypes.ADD_CARD,
            }
        ) ).toEqual({
                isDealer: 1, 
                victory:0, 
                lost:1, 
                deck:[], 
                dealerCards:["A","8"],
                dealerPoints: 19, 
                playerCards:["A"],
                playerPoints: 11,
             })
    });

    it('Dealer A8A , Player AJ should be D-20 P-21 points. DealerCards change to A81 ', () => {

        const deck = ["A"];
        const mockDealerCards = ["A","8"];
        const mockPlayerCards = ["A","J"];
        const mockPlayerPoints = 21;
       

        expect( cardReducer(
            {...INITIAL_STATE, dealerCards: mockDealerCards, deck, playerCards: mockPlayerCards, playerPoints:mockPlayerPoints},
            {
                type: CardActionTypes.ADD_CARD,
            }
        ) ).toEqual({
                isDealer: 1, 
                victory:0, 
                lost:0, 
                deck:[], 
                dealerCards:["A","8","1"],
                dealerPoints: 20, 
                playerCards:["A", "J"],
                playerPoints: 21,
             })
    });

    it('Dealer A8A2 , Player AJ should be D-20 P-21 points. DealerCards change to 1812 ', () => {

        const deck = ["2"];
        const mockDealerCards = ["A","8","A"];
        const mockPlayerCards = ["A","J"];
        const mockPlayerPoints = 21;
       

        expect( cardReducer(
            {...INITIAL_STATE, dealerCards: mockDealerCards, deck, playerCards: mockPlayerCards, playerPoints:mockPlayerPoints},
            {
                type: CardActionTypes.ADD_CARD,
            }
        ) ).toEqual({
                isDealer: 1, 
                victory:0, 
                lost:0, 
                deck:[], 
                dealerCards:["1","8","1","2"],
                dealerPoints: 12, 
                playerCards:["A", "J"],
                playerPoints: 21,
             })
    });

    it('Dealer K824 , Player AJ should be D-24 P-21 points. Victory = 1 ', () => {

        const deck = ["4"];
        const mockDealerCards = ["K","8","2"];
        const mockPlayerCards = ["A","J"];
        const mockPlayerPoints = 21;
       

        expect( cardReducer(
            {...INITIAL_STATE, dealerCards: mockDealerCards, deck, playerCards: mockPlayerCards, playerPoints:mockPlayerPoints},
            {
                type: CardActionTypes.ADD_CARD,
            }
        ) ).toEqual({
                isDealer: 1, 
                victory:1, 
                lost:0, 
                deck:[], 
                dealerCards:["K","8","2","4"],
                dealerPoints: 24, 
                playerCards:["A", "J"],
                playerPoints: 21,
             })
    });

    it('Dealer AA , Player AA9 should be D-21 P-21 points. DRAW Lost = 1  ', () => {

        const deck = ["A"];
        const mockDealerCards = ["A","9"];
        const mockPlayerCards = ["A","A","9"];
        const mockPlayerPoints = 21;
       

        expect( cardReducer(
            {...INITIAL_STATE, dealerCards: mockDealerCards, deck, playerCards: mockPlayerCards, playerPoints:mockPlayerPoints},
            {
                type: CardActionTypes.ADD_CARD,
            }
        ) ).toEqual({
                isDealer: 1, 
                victory:0, 
                lost:1, 
                deck:[], 
                dealerCards:["A","9","1"],
                dealerPoints: 21, 
                playerCards:["A", "A", "9"],
                playerPoints: 21,
             })
    });

    
});

