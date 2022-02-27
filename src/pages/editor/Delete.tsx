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
    console.log('old', items);

    if (typeof id !== 'undefined') {
      items.pop(id);
    }

    const temp = [...items];

    console.log('new', temp);

    setItems(temp);

    navigate(`/`);
  }

  return (
    <button id="delete" onClick={delHandler}>
      <img src={delIcon} alt="delete-icon" />
    </button>
  );
}
