import React from 'react';
import { NoteProps } from '../../shared/components/Note';
import NoteThumb from '../../shared/components/NoteThumb';
import Delete from './Delete';
import style from './NotesBar.scss';
import noteStyle from './NoteThumb.scss';

interface ListProps {
  items: any;
  setItems: any;
}

export default function NotesList(props: ListProps) {
  const itemEles = props.items.map((dat: NoteProps) => {
    return (
      <NoteThumb
        key={dat.id}
        id={dat.id}
        summary={dat.summary}
        details={dat.details}
        styleSheet={noteStyle}
      ></NoteThumb>
    );
  });

  return (
    <nav className={style.notesBar}>
      <Delete
        items={props.items}
        setItems={props.setItems}
      ></Delete>
      {itemEles}
    </nav>
  );
}
