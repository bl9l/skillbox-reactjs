import React, {useContext} from 'react';
import styles from './cardslist.scss';
import {Card} from "./Card";
import {postsContext} from "../../contexts/postsContext";

export function CardsList() {
  const posts = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {posts.map((postData, index) => <Card data={postData} key={index}/>)}
    </ul>
  );
}
