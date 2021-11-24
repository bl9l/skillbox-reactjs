import React, {FormEvent, useState} from 'react';
import styles from './postcommentform.scss';

export function PostCommentForm() {
  const [value, setValue] = useState('');
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(value);
  }

  return (<form className={styles.form} onSubmit={handleSubmit}>
    <textarea className={styles.input} value={value} onChange={e => setValue(e.target.value)}/>
    <button type='submit' className={styles.button}>Комментировать</button>
  </form>);
}
