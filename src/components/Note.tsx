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

interface ItemProps {
  id: string;
  title: string;
  summary: string;
  selected: boolean;
}
const Item = (props: ItemProps) => {
  return (
    <div
      className={['sidebar-item', props.selected ? 'selected' : ''].join(' ')}
    >
      <h1>{props.title}</h1>
      <p>{props.summary}</p>
    </div>
  );
};

export default { Note, Item };
