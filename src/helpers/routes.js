import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../components/App';
import Error404 from '../components/errors/Error404';
import HomePage from '../components/pages/HomePage';
import requestPipeline from '../components/pages/requestPipeline';
import reducers from '../reducers/reducers';

import '../sass/Routes.css';

export default class Routes extends Component {
    constructor() {
        super();
        
        const store = createStore(reducers);

        this.state = {
            store
        };

        store.subscribe(() => {
            console.log('store.getState()', store.getState());
        });

    }
    render() {
        return (
            <Provider store={this.state.store}>
                <BrowserRouter className="router">
                    <Switch>
                        <Route exact path="/test" component={App}/>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/" component={requestPipeline}/>
                        <Route path="/*" component={Error404}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
};
