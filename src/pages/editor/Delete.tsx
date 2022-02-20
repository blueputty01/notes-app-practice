import React from 'react';
import delIcon from '../../shared/icons/delete.png';
import { useLocalStorage } from '../../shared/services/useLocalStorage';
import { useParams } from 'react-router-dom';
import './Delete.scss';

export default function Add() {
  let [items, setItems] = useLocalStorage('items', {});
  let { id } = useParams();

  return (
    <button id="delete" onClick={delHandler}>
      <img src={delIcon} alt="delete-icon" />
    </button>
  );
  function delHandler() {
    if (typeof id !== 'undefined') {
      delete items[id];
      console.log(items);
    }

    setItems(items);
    console.log('set');
  }
}
