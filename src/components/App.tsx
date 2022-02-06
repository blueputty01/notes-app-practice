import React from 'react';
import Sidebar from './Sidebar';
import Note from './Note';
import './App.scss';

export default function App() {
  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      <Note title="Header 1"></Note>
    </React.Fragment>
  );
}
