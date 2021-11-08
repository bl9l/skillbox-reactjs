import React from 'react';
import styles from './cardslist.scss';
import {Card, ICardData} from "./Card";

const cardData: ICardData = {
  title: 'Но представители современных социальных течений',
  previewUrl: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
  hoursSinsLastView: 3,
  hoursSinsPublication: 5,
  votesCount: 500,
  userData: {
    name: 'Станислав Грачёв',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JlDm6KyOLBirUr0viGpfFJsCH4yFlAa9Rw&usqp=CAU',
    profileUrl: '#some_url',
  }
}

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card data={cardData}/>
    </ul>
  );
}
