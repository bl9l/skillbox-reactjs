import React from 'react';
import styles from './header.scss';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {UserBlock} from "./UserBlock";

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock/>
      <UserBlock/>
    </header>
  );
}
