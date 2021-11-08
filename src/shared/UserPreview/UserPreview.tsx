import React from 'react';
import styles from './userpreview.scss';
import {ICardData} from "../CardsList/Card";

export function UserPreview({data}: {data: ICardData['userData']}) {
  return (
    <span className={styles.userPreview}>
      <img
        className={styles.userPreviewImage}
        src={data.avatar}
        alt="small avatar"
      />
      <a href={data.profileUrl} className={styles.link}>
        {data.name}
      </a>
    </span>
  );
}
