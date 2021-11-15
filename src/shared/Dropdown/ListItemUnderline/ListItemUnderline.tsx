import React, {PropsWithChildren} from 'react';
import styles from './listitemunderline.scss';


interface IListItemUnderlineProps extends PropsWithChildren<{}>{
  className?: string;
  onClick: () => void;
}

export function ListItemUnderline({children, className = '', onClick = () => {}}: IListItemUnderlineProps) {
  return (
    <div className={`${styles.listItem} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
