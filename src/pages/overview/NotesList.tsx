import React from 'react';
import { NoteProps } from '../../shared/components/Note';
import NoteThumb from '../../shared/components/NoteThumb';
import style from './NotesList.scss';
import thumbStyles from './NoteThumb.scss';

interface Props {
  items: any;
  setItems: any;
}

export default function NotesList(props: Props) {
  const itemEles = props.items.map((dat: NoteProps) => {
    return (
      <NoteThumb
        key={dat.id}
        id={dat.id}
        summary={dat.summary}
        details={dat.details}
        styleSheet={thumbStyles}
      ></NoteThumb>
    );
  });

  return <div className={style.noteList}>{itemEles}</div>;
}
