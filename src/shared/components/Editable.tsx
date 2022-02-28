import React, { useEffect, useRef } from 'react';

// https://javascript.plainenglish.io/editable-html-in-react-6dd67dd7e302

interface EditableProps {
  children: React.ReactNode;
  onChange: Function;
}

const EditableElement = (props: EditableProps) => {
  const { onChange } = props;
  const element = useRef();
  let elements = React.Children.toArray(props.children);
  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }

  const onBlur = () => {
    const curr = element.current as any;
    const value = curr?.value || curr?.innerText;
    onChange(value);
  };
  useEffect(() => {
    const curr = element.current as any;
    const value = curr?.value || curr?.innerText;
    onChange(value);
  }, []);
  const ret = React.cloneElement(elements[0] as React.ReactElement<any>, {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onBlur,
  });
  return ret;
};

export default EditableElement;
