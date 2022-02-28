import React, { useEffect, useState } from 'react';
import NotesList from './NotesBar';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../../shared/services/useLocalStorage';
import { NoteProps } from '../../shared/components/Note';
import Add from '../../shared/components/Add';
import style from './Editor.scss';

const Note = (props: NoteProps) => {
  return (
    <div className={style.note}>
      <h1>{props.summary}</h1>
      <p>{props.details}</p>
    </div>
  );
};

export default function Editor() {
  let { id } = useParams();

  let [items, setItems] = useLocalStorage('items', []);

  const newId = id ? id : 'none';

  const find = items.find((item: NoteProps) => {
    return item.id === newId;
  });

  if (typeof find === 'undefined') {
    return <h1>This note does not exist.</h1>;
  }

  const dat = find as NoteProps;

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <NotesList
          items={items}
          setItems={setItems}
          selected={newId}
        ></NotesList>
      </div>
      <div className={style.noteContainer}>
        <div className={style.buttons}>
          <Add items={items} setItems={setItems}></Add>
        </div>
        <Note summary={dat.summary} details={dat.details} id={dat.id}></Note>
      </div>
    </div>
  );
}
