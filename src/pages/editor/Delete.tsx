import React from 'react';
import delIcon from '../../shared/icons/delete.png';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NoteProps } from '../../shared/components/Note';

interface DelProps {
  items: any;
  setItems: any;
}

export default function Delete(props: DelProps) {
  const { items, setItems } = props;
  let { id } = useParams();

  const navigate = useNavigate();

  function delHandler() {
    let i = 0;
    if (typeof id !== 'undefined') {
      i = items.findIndex((item: NoteProps) => {
        return item.id === id;
      });

      const save = items.filter((item: NoteProps) => item.id !== id);

      const newNav = findNext();
      navigate(newNav);

      setItems(save);
    } else {
      navigate('/');
    }

    function findNext() {
      const len = items.length;
      let newId = 0;
      if (len == 1) {
        return '/';
      } else {
        if (i + 1 == len) {
          newId = i - 1;
        } else {
          newId = i + 1;
        }
        return `/notes/${items[newId].id}`;
      }
    }
  }

  return (
    <button id="delete" onClick={delHandler}>
      <img src={delIcon} alt="delete-icon" />
    </button>
  );
}
