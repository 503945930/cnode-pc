//import "../css/font-awesome.min.css"
//import '../css/main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DevReactTools from './utils/DevReactTools'
import routes from './routes.jsx';

injectTapEventPlugin();

const store = configureStore(); //配置store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
  <div>
    <Router routes={routes} history={history} />
    
  </div>
</Provider>, document.getElementById('app'));
