import React from 'react';
import styles from './votecontrol.scss';

export function VoteControl() {
  return (
    <div className={styles.voteControl}>
      <svg className={styles.voteButton} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="var(--voteButtonFill)"/>
      </svg>
      <div className={styles.votesCount}>
        214
      </div>
      <svg className={styles.voteButton} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="var(--voteButtonFill)"/>
      </svg>
    </div>
  );
}
