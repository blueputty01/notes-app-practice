import React from 'react';
import './Item.scss';
import '../styles/utils.scss';
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

export default Item;
