import React from 'react';
import { NoteProps } from '../../shared/components/Note';
import NoteThumb from '../../shared/components/NoteThumb';
import { useLocalStorage } from '../../shared/services/useLocalStorage';
import Delete from './Delete';
import './NotesBar.module.scss';
import './NoteThumb.module.scss';

export default function NotesList() {
  let [items, setItems] = useLocalStorage('items', []);

  const itemEles = Object.entries(items).map(([key, dat]) => {
    const castedDat = dat as NoteProps;

    return (
      <NoteThumb
        key={key}
        id={key}
        summary={castedDat.summary}
        details={castedDat.details}
      ></NoteThumb>
    );
  });

  return (
    <nav className="notes-bar">
      <Delete></Delete>
      {itemEles}
    </nav>
  );
}
