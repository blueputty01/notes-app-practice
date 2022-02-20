import React from 'react';
import './Note.scss';

export interface NoteProps {
  summary: string;
  details: string;
}

const Note = (props: NoteProps) => {
  return (
    <React.Fragment>
      <div>
        <h1>{props.summary}</h1>
        <p>{props.details}</p>
      </div>
    </React.Fragment>
  );
};

export default Note;
