import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import Overview from './pages/overview/Overview';
import Editor from './pages/editor/Editor';

export default function App() {
  return (
    <Routes>
      <Route path="notes/:id" element={<Editor />} />
      <Route path="/" element={<Overview />} />
    </Routes>
  );
}
