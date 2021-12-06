import React, {ChangeEvent, useEffect, useRef} from 'react';
import styles from './postcommentform.scss';
import {Formik} from "formik";

interface IPostCommentFormProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  onSubmit: (e: {comment: string}) => void
}

export function PostCommentForm({value = '', onChange, onSubmit}: IPostCommentFormProps) {

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    // переводим каретку в конец строки
    inputRef.current?.setSelectionRange(value?.length || 0, value?.length || 0);
  }, []);

  return (
    <Formik
      initialValues={{comment: ''}}
      validate={values => {
        const errors: any = {};
        if (!values.comment) {
          errors.comment = 'Укажите коментарий'
        }
        if (values.comment.length > 100) {
          errors.comment = 'Слишком много букв'
        }

        return errors;
      }}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        onSubmit(values);
        setTimeout(() => {
          setSubmitting(false);
          alert('Formik submit');
          resetForm();
        }, 1000);
      }}
    >{({
      values,
      handleSubmit,
      handleChange,
      errors,
      submitCount
    }) => (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label style={{width: '100%'}}>
          Коментарий
          <textarea name='comment' className={styles.input} value={values.comment} onChange={e => {onChange(e); handleChange(e)}} ref={inputRef} placeholder='Максимум 100 символов'/>
        </label>
        {errors.comment && submitCount > 0 && errors.comment}
        <button type='submit' className={styles.button}>Комментировать</button>
      </form>
    )}</Formik>
  );
}
