import React from 'react';
import styles from './listitemunderline.scss';

interface IListItemUnderlineProps {
  icon: string;
  text: string;
}

export function ListItemUnderline({icon, text}: IListItemUnderlineProps) {
  return (
    <div className={styles.listItem}>
      <img src={icon} alt="Icon"/>
      {text}
    </div>
  );
}
