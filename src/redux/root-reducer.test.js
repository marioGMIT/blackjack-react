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

    const INITIAL_STATE_CARD = {
        dealerCards: [],
        // playerCards: [],
        // cardsArray: [...hearts, ...hearts, ...hearts, ...hearts],
         deck: ["3"],
        // hand: [],
        isDealer: 1,
        cardsLeft: 1,
        dealerPoints: 0,
        // playerPoints: 0,
        victory: 0,
        lost: 0,
        // gameStarted: 0,
    };
    
    // const NEW_CARD = 4;

    it('should return initial state ', () => {
        expect( cardReducer(INITIAL_STATE_CARD,{}) ).toEqual({isDealer: 1, victory: 0, deck: ["3"],dealerPoints: 0, dealerCards:[], cardsLeft: 1,lost: 0}, {})
    });

    it('should handle IS_DEALER action ', () => {
        expect( cardReducer(
            INITIAL_STATE_CARD,
            {
                type: CardActionTypes.IS_DEALER
            }
        ) ).toEqual({isDealer: false, victory:0, deck:["3"],dealerPoints: 0,dealerCards:[], cardsLeft: 1, lost: 0 })
    });

   

    it('should handle ADD_CARD action ', () => {
        expect( cardReducer(
            INITIAL_STATE_CARD,
            {
                type: CardActionTypes.ADD_CARD
            }
        ) ).toEqual({isDealer: 1, victory:0, deck:[], dealerPoints: 3, dealerCards:[["3"]], cardsLeft: 0, lost:0 })
    });

    // it('should handle ADD_ITEM action ', () => {
    //     expect( cardReducer(
    //         INITIAL_STATE_CARD,
    //         {
    //             type: CardActionTypes.ADD_ITEM,
    //             payload: NEW_ITEM
    //         }
    //     ) ).toEqual({  hidden: true, cartItems: [{...NEW_ITEM, quantity: 1}]         
        
    //     })
    // });

    // it('should increase quantity to an existing item in the cart ', () => {

    //     const mockItem = {...NEW_ITEM, quantity:4};

    //     expect( cardReducer(
    //         {...INITIAL_STATE_CARD, cartItems: [mockItem]},
    //         {
    //             type: CardActionTypes.ADD_ITEM,
    //             payload: NEW_ITEM
    //         }
    //     ) ).toEqual({  hidden: true, cartItems: [{...NEW_ITEM, quantity: 5}]         
        
    //     })
    // });

    // it('should decrease quantity to an existing item in the cart ', () => {

    //     const mockItem = {...NEW_ITEM, quantity:4};

    //     expect( cardReducer(
    //         {...INITIAL_STATE_CARD, cartItems: [mockItem]},
    //         {
    //             type: CardActionTypes.REMOVE_ITEM,
    //             payload: NEW_ITEM
    //         }
    //     ) ).toEqual({  hidden: true, cartItems: [{...NEW_ITEM, quantity: 3}]         
        
    //     })
    // });

    // it('should CLEAR ITEM FROM CART ', () => {

    //     const mockItem = {...NEW_ITEM, quantity:4};

    //     expect( cardReducer(
    //         {...INITIAL_STATE_CARD, cartItems: [mockItem]},
    //         {
    //             type: CardActionTypes.CLEAR_ITEM_FROM_CART,
    //             payload: NEW_ITEM
    //         }
    //     ) ).toEqual({  hidden: true, cartItems: []         
        
    //     })
    // });

    
    
});


// describe('Shop Reducer', () => {
    
// });

// describe('Directory Reducer', () => {
    
// });