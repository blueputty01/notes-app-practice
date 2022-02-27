import React from 'react';
import delIcon from '../../shared/icons/delete.png';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface DelProps {
  items: any;
  setItems: any;
  deletedIndex: number;
  setDeletion: any;
}

export default function Delete(props: DelProps) {
  const { items, setItems, deletedIndex, setDeletion } = props;
  let { id } = useParams();

  const navigate = useNavigate();

  function delHandler() {
    console.log('deleting');
    console.log(id);
    console.log(items);

    const newObject = {};
    if (typeof id !== 'undefined') {
      const newObject = { ...items };
      newObject[id] = undefined;
    }

    console.log(newObject);

    navigate('/');
    setItems(newObject);
    // setDeletion(id);
  }

  return (
    <button id="delete" onClick={delHandler}>
      <img src={delIcon} alt="delete-icon" />
    </button>
  );
}
