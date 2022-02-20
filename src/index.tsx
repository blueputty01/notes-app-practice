import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import './shared/styles/global.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  rootElement
);
