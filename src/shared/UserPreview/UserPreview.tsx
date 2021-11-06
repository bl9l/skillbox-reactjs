import React from 'react';
import styles from './userpreview.scss';

export function UserPreview() {
  return (
    <span className={styles.userPreview}>
      <img
        className={styles.userPreviewImage}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JlDm6KyOLBirUr0viGpfFJsCH4yFlAa9Rw&usqp=CAU"
        alt="small avatar"
      />
      <a href="#" className={styles.link}>
        Станислав Грачёв
      </a>
    </span>
  );
}
