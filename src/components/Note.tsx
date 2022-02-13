import React from 'react';
import './Note.scss';
import Sidebar from './Sidebar';

interface ItemProps {
  title: string;
  children?: React.ReactNode;
}

const Note = (props: ItemProps) => {
  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      <main>
        <h1>{props.title}</h1>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Note;
