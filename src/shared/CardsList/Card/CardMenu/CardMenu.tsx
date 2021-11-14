import React from 'react';
import styles from './cardmenu.scss';
import {Dropdown} from "../../../Dropdown";
import {ListItemUnderline} from "../../../Dropdown/ListItemUnderline";
import {ListItemClose} from "../../../Dropdown/ListItemClose";
import {Icon, Icons} from "../../../Icon";
import MenuDotsIcon from '../../../../assets/menu-dots.svg';


export function CardMenu() {
  return (
    <Dropdown button={
      <a className={styles.menuDotsContainer}>
        <img src={MenuDotsIcon} alt=""/>
      </a>
    }>
      <ListItemUnderline>
        <Icon icon={Icons.Messages}/>Комментарии
      </ListItemUnderline>
      <ListItemUnderline>
        <Icon icon={Icons.Share}/>Поделиться
      </ListItemUnderline>
      <ListItemUnderline>
        <Icon icon={Icons.Hide}/>Скрыть
      </ListItemUnderline>
      <ListItemUnderline>
        <Icon icon={Icons.Save}/>Сохранить
      </ListItemUnderline>
      <ListItemUnderline>
        <Icon icon={Icons.Warning}/>Пожаловаться
      </ListItemUnderline>
      <ListItemClose text='Закрыть'/>
    </Dropdown>
  );
}
