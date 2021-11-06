import React from 'react';
import styles from './cardpublicationinfo.scss';
import {UserPreview} from "../../../UserPreview";

export function CardPublicationInfo() {
  return (
    <p className={styles.publicationInfo}>
      <span>
        <span className={styles.publishedWord}>
          опубликовано
        </span>
        5 часов назад 
      </span>
      <UserPreview/>
    </p>
  );
}
