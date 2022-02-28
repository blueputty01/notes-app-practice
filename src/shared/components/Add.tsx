import React from 'react';
import addIcon from '../icons/add.png';
import { v4 as uuidv4 } from 'uuid';
import styles from './Add.scss';
import { useNavigate } from 'react-router-dom';

interface AddProps {
  items: any;
  setItems: any;
}

export default function Add(props: AddProps) {
  const { items, setItems } = props;

  const navigate = useNavigate();

  return (
    <button className={styles.add} onClick={addHandler}>
      <img src={addIcon} alt="add-icon" /> New Note
    </button>
  );
  function addHandler() {
    const id = uuidv4();

    setItems([
      ...items,
      {
        id,
        summary: `Note title ${items.length + 1}`,
        details:
          'test message test message test message test message test message test message',
      },
    ]);

    navigate(`/notes/${id}`);
  }
}
