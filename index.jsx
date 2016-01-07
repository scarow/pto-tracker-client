import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import routes from './routes.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Root from './Root.jsx';
let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>{routes}</Router>,
  document.getElementById('content')
);

