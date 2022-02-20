import React from 'react';
import addIcon from '../icons/add.png';
import { useLocalStorage } from '../services/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import './Add.scss';

export default function Add() {
  let [items, setItems] = useLocalStorage('items', {});
  console.log(items);

  return (
    <button id="add" onClick={addHandler}>
      <img src={addIcon} alt="add-icon" /> New Note
    </button>
  );
  function addHandler() {
    setItems({
      ...items,
      [uuidv4()]: { summary: 'note', details: 'lorem ipsum' },
    });
  }
}
