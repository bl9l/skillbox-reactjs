import React, {useState} from 'react';
import styles from './cardtitle.scss';
import {Post} from "../../../Post";
import {Link} from "react-router-dom";

interface ICardTitleProps {
  title: string;
}

export function CardTitle({title}: ICardTitleProps) {

  return (
    <h2 className={styles.title}>
      <Link to="/posts/1">{title}</Link>
    </h2>
  );
}
