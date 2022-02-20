import React from 'react';
import NotesList from './NotesBar';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../../shared/services/useLocalStorage';
import Note from '../../shared/components/Note';
import { NoteProps } from '../../shared/components/Note';
import Add from '../../shared/components/Add';
import './Editor.module.scss';

export default function Editor() {
  let { id } = useParams();

  let [items, setItems] = useLocalStorage('items', []);

  const dat = items[id ? id : 'none'] as NoteProps;

  return (
    <div className="container">
      <div className="sidebar">
        <NotesList></NotesList>
      </div>
      <div className="note">
        <div className="buttons">
          <Add></Add>
        </div>
        <Note summary={dat.summary} details={dat.details}></Note>
      </div>
    </div>
  );
}
