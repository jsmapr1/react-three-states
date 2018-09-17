import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCartPlus } from '@fortawesome/free-solid-svg-icons'

import rootReducer from './store/reducers';

library.add(faShoppingCart);
library.add(faCartPlus);

function saveState(state) {
  try {
    const serialisedState = JSON.stringify(state);
    window.sessionStorage.setItem('app_state', serialisedState);
  } catch (err) {
  }
};

function loadState(){
  try {
    const serialisedState = window.sessionStorage.getItem('app_state');
    if (!serialisedState) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

const session = loadState();
const store = createStore(rootReducer, session,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
