import React from 'react';
import NotesList from './NotesList';
import './Editor.scss';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../../shared/services/useLocalStorage';
import Note from '../../shared/components/Note';
import { NoteProps } from '../../shared/components/Note';
import Add from '../../shared/components/Add';

export default function Editor() {
  let { id } = useParams();

  let [items, setItems] = useLocalStorage('items', []);

  const dat = items[id ? id : 'none'] as NoteProps;

  return (
    <React.Fragment>
      <NotesList></NotesList>
      <Add></Add>
      <Note summary={dat.summary} details={dat.details}></Note>
    </React.Fragment>
  );
}
