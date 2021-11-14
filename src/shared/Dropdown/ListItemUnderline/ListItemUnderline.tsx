import React, {PropsWithChildren} from 'react';
import styles from './listitemunderline.scss';


interface IListItemUnderlineProps extends PropsWithChildren<{}>{}

export function ListItemUnderline({children}: IListItemUnderlineProps) {
  return (
    <div className={styles.listItem}>
      {children}
    </div>
  );
}
