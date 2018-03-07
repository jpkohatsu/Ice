import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Routes from './router';

import reducers from './reducers';

class AppRoot extends Component {
    render() {
        return (
        <Provider store={createStore(reducers)}>
                <Routes />
        </Provider>
        );
    }
}

export default AppRoot;
