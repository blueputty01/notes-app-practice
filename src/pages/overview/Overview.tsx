import React from 'react';
import Add from '../../shared/components/Add';
import NotesList from './NotesList';
import './Overview.scss';
import '../../shared/styles/utils.scss';

export default function Overview() {
  return (
    <main>
      <Header></Header>
      <NotesList></NotesList>
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
