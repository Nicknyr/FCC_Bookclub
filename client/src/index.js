import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducers from './reducers';
import { BrowserRouter } from "react-router-dom";
import { Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import AddBookForm from './components/AddBookForm';
import Users from './components/Users';
import Trades from './components/Trades';
import BooksAvailable from './components/BooksAvailable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk, logger)
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/book" component={AddBookForm} />
          <Route path="/books" component={BooksAvailable} />
          <Route path="/users" component={Users} />
          <Route path="/trades" component={Trades} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
