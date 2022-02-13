import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Notes from './routes/notes';

import './styles/global.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="notes" element={<Notes />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
