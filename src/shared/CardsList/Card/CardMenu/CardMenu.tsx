import React from 'react';
import styles from './cardmenu.scss';
import {Dropdown} from "../../../Dropdown";
import {ListItemUnderline} from "../../../Dropdown/ListItemUnderline";
import MessagesIcon from '../../../../assets/messages.svg';
import ShareIcon from '../../../../assets/share.svg';
import HideIcon from '../../../../assets/hide.svg';
import SaveIcon from '../../../../assets/save.svg';
import WarningIcon from '../../../../assets/warning.svg';
import {ListItemClose} from "../../../Dropdown/ListItemClose";

export function CardMenu() {
  return (
    <Dropdown button={
      <a className={styles.menuDotsContainer}>
        <svg className={styles.menuDots} width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
          <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
          <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
        </svg>
      </a>
    }>
      <ListItemUnderline icon={MessagesIcon} text='Комментарии'/>
      <ListItemUnderline icon={ShareIcon} text='Поделиться'/>
      <ListItemUnderline icon={HideIcon} text='Скрыть'/>
      <ListItemUnderline icon={SaveIcon} text='Сохранить'/>
      <ListItemUnderline icon={WarningIcon} text='Пожаловаться'/>
      <ListItemClose text='Закрыть'/>
    </Dropdown>
  );
}
