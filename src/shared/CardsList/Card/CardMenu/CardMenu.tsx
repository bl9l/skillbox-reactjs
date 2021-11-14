import React from 'react';
import styles from './cardmenu.scss';
import {Dropdown} from "../../../Dropdown";
import {ListItemUnderline} from "../../../Dropdown/ListItemUnderline";
import {ListItemClose} from "../../../Dropdown/ListItemClose";
import {Icon, Icons} from "../../../Icon";
import MenuDotsIcon from '../../../../assets/menu-dots.svg';
import {ICardData} from "../Card";


interface ICardMenuProps {
  id: ICardData["id"];
}

export function CardMenu({id}: ICardMenuProps) {

  const handleClick = (action: string) => () => console.log(action, id);

  return (
    <Dropdown button={
      <a className={styles.menuDotsContainer}>
        <img src={MenuDotsIcon} alt=""/>
      </a>
    }>
      <ListItemUnderline onClick={handleClick('Комментарии')} className='d-none d-sm-flex'>
        <Icon icon={Icons.Messages}/>Комментарии
      </ListItemUnderline>
      <ListItemUnderline onClick={handleClick('Поделиться')} className='d-none d-sm-flex'>
        <Icon icon={Icons.Share}/>Поделиться
      </ListItemUnderline>
      <ListItemUnderline onClick={handleClick('Скрыть')}>
        <Icon icon={Icons.Hide}/>Скрыть
      </ListItemUnderline>
      <ListItemUnderline onClick={handleClick('Сохранить')} className='d-none d-sm-flex'>
        <Icon icon={Icons.Save}/>Сохранить
      </ListItemUnderline>
      <ListItemUnderline onClick={handleClick('Пожаловаться')}>
        <Icon icon={Icons.Warning}/>Пожаловаться
      </ListItemUnderline>
      <ListItemClose text='Закрыть'/>
    </Dropdown>
  );
}
