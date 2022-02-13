import React from 'react';
import Add from './Add';
import './Overview.scss';
import '../styles/utils.scss';

export default function Sidebar() {
  return (
    <main>
      <Header></Header>
    </main>
  );
}

function Header() {
  return (
    <header className="overview">
      <h1>My notes</h1>
      <div className="push-right">
        <Add></Add>
      </div>
    </header>
  );
}
