import React, {useState} from 'react';
import styles from './cardtitle.scss';
import {Post} from "../../../Post";

interface ICardTitleProps {
  title: string;
}

export function CardTitle({title}: ICardTitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title} onClick={() => console.log('click')}>
      <a href="#" onClick={() => setIsModalOpened(true)}>{title}</a>
      {isModalOpened && (
        <Post onClose={() => setIsModalOpened(false)}/>
      )}
    </h2>
  );
}
