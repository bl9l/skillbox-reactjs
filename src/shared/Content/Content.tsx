import React, {PropsWithChildren} from 'react';
import styles from './content.scss';

export function Content({children}: PropsWithChildren<{}>) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
