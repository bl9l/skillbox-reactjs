import React, {useEffect, useRef} from 'react';
import styles from './post.scss';
import {createPortal} from "react-dom";
import {PostCommentFormContainer} from "./PostCommentFormContainer";

interface IPostProps {
  onClose?: () => void
}

export function Post({onClose}: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        onClose?.();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return createPortal(<div className={styles.post} ref={ref}>
    <h2 className={styles.title}>Следует отметить, что новая модель организационной деятельности поможет</h2>
    <p className={styles.text}>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
    <PostCommentFormContainer/>
  </div>, document.querySelector('#modal_root') as Element);
}
