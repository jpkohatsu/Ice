import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import registerServiceWorker from './registerServiceWorker';

import AppRoot from './root';


ReactDOM.render(
    <AppRoot />, document.getElementById('root'));
registerServiceWorker();
