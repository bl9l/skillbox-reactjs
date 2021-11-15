import React from 'react';
import styles from './card.scss';
import {CardPreviewImage} from "./CardPreviewImage";
import {CardMenu} from "./CardMenu";
import {VoteControl} from "./Controls/VoteControl";
import {CardPublicationInfo} from "./CardPublicationInfo";

export interface ICardData {
  id: number;
  title: string;
  hoursSinsLastView: number;
  hoursSinsPublication: number;
  votesCount: number;
  previewUrl: string;
  userData: {
    name: string;
    avatar: string;
    profileUrl: string
  }
}

export interface ICardsProps {
  data: ICardData;
}

export function Card({data}: ICardsProps) {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.cardPublicationInfo}>
          <CardPublicationInfo data={data}/>
        </div>
        <p className={styles.viewedAt}>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z" fill="#999999"/>
          </svg>
          <span>{data.hoursSinsLastView} часа назад</span>
        </p>
      </div>
      <div className={styles.cardMenu}>
        <CardMenu id={data.id}/>
      </div>
      <div className={styles.previewImage}>
        <CardPreviewImage src={data.previewUrl}/>
      </div>
      <div className={styles.controls}>
        <VoteControl count={data.votesCount}/>
      </div>
    </li>
  );
}
