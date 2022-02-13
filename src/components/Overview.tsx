import React from 'react';
import Add from './Add';
import './Overview.scss';

export default function Sidebar() {
  return (
    <main>
      <header>
        <h1>My notes</h1>
        <Add></Add>
      </header>
    </main>
  );
}
