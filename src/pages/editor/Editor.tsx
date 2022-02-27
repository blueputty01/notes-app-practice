import React, { useEffect, useState } from 'react';
import NotesList from './NotesBar';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../../shared/services/useLocalStorage';
import Note from '../../shared/components/Note';
import { NoteProps } from '../../shared/components/Note';
import Add from '../../shared/components/Add';
import style from './Editor.module.scss';
import { useNavigate } from 'react-router-dom';
import { off } from 'process';

export default function Editor() {
  const navigate = useNavigate();

  let { id } = useParams();

  let [items, setItems] = useLocalStorage('items', []);
  console.log(items);

  const newId = id ? id : 'none';

  // console.log(newId);

  const find = items.find((item: NoteProps) => {
    return item.id === newId;
  });

  if (typeof find === 'undefined') {
    return <h1>This note does not exist.</h1>;
  }

  const dat = find as NoteProps;

  const [deletedIndex, setDeletion] = useState(-1);

  useEffect(() => {
    console.log(deletedIndex);

    if (deletedIndex != -1) {
      navigate('/');
    }
  }, [deletedIndex]);

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <NotesList
          items={items}
          setItems={setItems}
          setDeletion={setDeletion}
          deletedIndex={deletedIndex}
        ></NotesList>
      </div>
      <div className={style.note}>
        <div className={style.buttons}>
          <Add items={items} setItems={setItems}></Add>
        </div>
        <Note summary={dat.summary} details={dat.details} id={dat.id}></Note>
      </div>
    </div>
  );
}
