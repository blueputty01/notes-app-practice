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
    if (typeof id !== 'undefined') {
      items.pop(id);
    }

    const temp = [...items];

    navigate(findNext());

    function findNext() {
      const len = items.length;

      if (len == 0) {
        return '/';
      } else {
        let newIndex = items.findIndex((item: NoteProps) => {
          return item.id === id;
        });

        if (newIndex == len) {
          newIndex--;
        }

        return `/notes/${items[newIndex].id}`;
      }
    }

    setItems(temp);
  }

  return (
    <button id="delete" onClick={delHandler}>
      <img src={delIcon} alt="delete-icon" />
    </button>
  );
}
