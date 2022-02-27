import React, { useEffect } from 'react';
import Add from '../../shared/components/Add';
import NotesList from './NotesList';
import style from './Overview.scss';
import utils from '../../shared/styles/utils.scss';
import { useLocalStorage } from '../../shared/services/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function Overview() {
  let [items, setItems] = useLocalStorage('items', []);

  const navigate = useNavigate();

  return (
    <main>
      <Header></Header>
      <NotesList items={items} setItems={setItems}></NotesList>
    </main>
  );

  function Header() {
    return (
      <header className={style.overview}>
        <h1>My notes</h1>
        <div className={utils.pushRight}>
          <Add items={items} setItems={setItems}></Add>
        </div>
      </header>
    );
  }
}
