import React from 'react';
import styles from './card.scss';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}></div>
      <div className={styles.preview}></div>
      <div className={styles.menu}></div>
      <div className={styles.controls}></div>
    </li>
  );
}
