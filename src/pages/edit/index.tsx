import React from 'react';
import './Sidebar.scss';
import Item from './SidebarItem';

export default function Sidebar() {
  return (
    <nav>
      <Item
        id={'bob'}
        title={'Note title 1'}
        summary={'test message'}
        selected={true}
      ></Item>
    </nav>
  );
}
