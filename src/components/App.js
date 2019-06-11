import React, { Component } from 'react';
import logger from 'redux-logger';

import rootReducer from '../reducer/rootReducer';

import {createStore, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MainComponent from './MainComponents';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainComponent />
            </Provider>
        );
    }
}

export default App;
