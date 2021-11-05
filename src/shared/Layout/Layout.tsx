import React, {PropsWithChildren} from "react";
import styles from './layout.scss';

interface ILayoutProps {

}

export function Layout ({children}: PropsWithChildren<ILayoutProps>) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
