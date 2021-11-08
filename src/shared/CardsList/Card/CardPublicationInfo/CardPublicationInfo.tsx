import React from 'react';
import styles from './cardpublicationinfo.scss';
import {UserPreview} from "../../../UserPreview";
import {ICardsProps} from "../Card";

export function CardPublicationInfo({data}: ICardsProps) {
  return (
    <p className={styles.publicationInfo}>
      <span>
        <span className={styles.publishedWord}>
          опубликовано
        </span>
        {data.hoursSinsPublication} часов назад 
      </span>
      <UserPreview data={data.userData}/>
    </p>
  );
}
