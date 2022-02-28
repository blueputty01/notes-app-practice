import React from 'react';
import { NoteProps } from './Note';
import { useNavigate } from 'react-router-dom';

export interface ThumbProps extends NoteProps {
  id: string;
  styleSheet: any;
  classes?: string[];
}

const NoteThumb = (props: ThumbProps) => {
  const style = props.styleSheet;

  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/notes/${props.id}`);
  };

  const classNames = [style.noteThumb];

  if (typeof props.classes !== 'undefined') {
    classNames.push(...props.classes);
  }

  return (
    <div className={classNames.join(' ')} onClick={redirect}>
      <h1>{props.summary}</h1>
      <p>{props.details}</p>
    </div>
  );
};

export default NoteThumb;
