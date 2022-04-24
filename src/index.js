import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/context';
import App from './App';
import './index.css';
import Router from './router';

ReactDOM.render(
    <Provider>
      <Router/>
    </Provider>,
  document.getElementById('root'),
);
