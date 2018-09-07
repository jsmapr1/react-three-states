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

const store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
