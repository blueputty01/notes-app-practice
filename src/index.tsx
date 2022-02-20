import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Overview from './pages/overview/Overview';
import Editor from './pages/editor/Editor';

import './shared/styles/global.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/:id" element={<Editor />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
