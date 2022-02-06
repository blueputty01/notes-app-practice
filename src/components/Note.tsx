import React from 'react';
import './Note.scss';

interface ItemProps {
  title: string;
  children?: React.ReactNode;
}

const Note = (props: ItemProps) => {
  return (
    <main>
      <h1>{props.title}</h1>
      {props.children}
    </main>
  );
};

export default Note;
