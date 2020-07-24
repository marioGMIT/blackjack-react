import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store.js';

import {addCard, isDealer, gameStarted, restart} from './redux/card/card.actions'

store.dispatch(restart());

// store.dispatch(isDealer());

// store.dispatch(addCard());
// store.dispatch(isDealer());
// store.dispatch(addCard());
// store.dispatch(addCard());
// store.dispatch(gameStarted());
// store.dispatch(isDealer());



ReactDOM.render(
  <Provider store={store}>    
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

