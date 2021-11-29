import React, {ChangeEvent, FormEvent, useEffect, useRef} from 'react';
import styles from './postcommentform.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../../store";

interface IPostCommentFormProps {
  defaultReplyText?: string;
}

export function PostCommentForm({defaultReplyText = ''}: IPostCommentFormProps) {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

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

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }

  return (<form className={styles.form} onSubmit={handleSubmit}>
    <textarea className={styles.input} value={value} onChange={handleChange} ref={inputRef}/>
    <button type='submit' className={styles.button}>Комментировать</button>
  </form>);
}
