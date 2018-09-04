import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
