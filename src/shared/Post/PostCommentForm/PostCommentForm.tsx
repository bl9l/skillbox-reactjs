import React, {FormEvent, useEffect, useRef, useState} from 'react';
import styles from './postcommentform.scss';

interface IPostCommentFormProps {
  defaultReplyText?: string;
}

export function PostCommentForm({defaultReplyText = ''}: IPostCommentFormProps) {
  const [value, setValue] = useState(defaultReplyText);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    // переводим каретку в конец строки
    inputRef.current?.setSelectionRange(defaultReplyText?.length || 0, defaultReplyText?.length || 0);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(value);
  }

  return (<form className={styles.form} onSubmit={handleSubmit}>
    <textarea className={styles.input} value={value} onChange={e => setValue(e.target.value)} ref={inputRef}/>
    <button type='submit' className={styles.button}>Комментировать</button>
  </form>);
}
