import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';
import store from './store-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Posts from './components/feed/Posts';
import Registration from './components/register/Registration';
import Entrance from './components/login/Entrance';
import './style_tape.css';

const rerender = store => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <section className="section">
          {document.location.pathname.length > 1 ? (
            <></>
          ) : (
            <Redirect from="/" to="/login" />
          )}
          <Route path="/feed" render={() => <Posts />} />
          <Route path="/register" render={() => <Registration />} />
          <Route path="/login" render={() => <Entrance />} />{' '}
        </section>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerender(store);
