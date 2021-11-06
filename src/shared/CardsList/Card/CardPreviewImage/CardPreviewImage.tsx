import React from 'react';
import styles from './cardpreviewimage.scss';

interface ICardPreviewImageProps {
  src: string;
}

export function CardPreviewImage({src}: ICardPreviewImageProps) {
  return (
    <img src={src} className={styles.cardPreviewImage} alt="Preview"/>
  );
}
