import React from 'react';
import { NoteProps } from './Note';
import { useNavigate } from 'react-router-dom';

export interface ThumbProps extends NoteProps {
  id: string;
}

const NoteThumb = (props: ThumbProps) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/notes/${props.id}`);
  };

  return (
    <div className="note-thumb" onClick={redirect}>
      <h1>{props.summary}</h1>
      <p>{props.details}</p>
    </div>
  );
};

export default NoteThumb;
