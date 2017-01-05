import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
require('./scrollmagic-controllers').default();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
