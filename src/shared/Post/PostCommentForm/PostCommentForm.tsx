import React, {ChangeEvent, FormEvent, useEffect, useRef} from 'react';
import styles from './postcommentform.scss';

interface IPostCommentFormProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  onSubmit: (e: FormEvent) => void
}

export function PostCommentForm({value = '', onChange, onSubmit}: IPostCommentFormProps) {

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    // переводим каретку в конец строки
    inputRef.current?.setSelectionRange(value?.length || 0, value?.length || 0);
  }, []);

  return (<form className={styles.form} onSubmit={onSubmit}>
    <textarea className={styles.input} value={value} onChange={onChange} ref={inputRef}/>
    <button type='submit' className={styles.button}>Комментировать</button>
  </form>);
}
