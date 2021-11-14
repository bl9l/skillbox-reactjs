import React from 'react';
import styles from './listitemclose.css';

interface IListItemClose {
  text: string;
}

export function ListItemClose({text}: IListItemClose) {
  return (
    <div className={styles.listItemClose}>
      {text}
    </div>
  );
}
