/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import ReactDOM from 'react-dom';

import './components/styles/global-styles.css';

import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
