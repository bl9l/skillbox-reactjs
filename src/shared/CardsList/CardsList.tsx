import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.scss';
import {Card, ICardData} from "./Card";
import axios from "axios";
import {useSelector} from "react-redux";
import {selectToken} from "../../store/token";


export interface IPostData {
  data: {
    id: string;
    title: string;
    score: number,
    preview?: {
      images: {
        source: {url: string};
      }[]
    },
    author: string;
  };
}

const mapRedditResponse = ({data}: IPostData): ICardData => ({
  id: data.id,
  title: data.title,
  hoursSinsLastView: null,
  hoursSinsPublication: null,
  votesCount: data.score,
  previewUrl: data.preview?.images[0].source.url,
  userData: {
    name: `u/${data.author}`,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JlDm6KyOLBirUr0viGpfFJsCH4yFlAa9Rw&usqp=CAU',
    profileUrl: `//www.reddit.com/user/${data.author}`,
  },
});

export function CardsList() {

  const token = useSelector(selectToken);
  const [posts, setPosts] = useState<ICardData[]>([]);
  const [pending, setPending] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');

  const bottomAnchor = useRef<HTMLDivElement>(null);



  useEffect(() => {

    async function load() {
      try {
        setPending(true);
        setErrorLoading('');
        const {data: {data: {after, children: newChildren}}} = await axios.get('https://oauth.reddit.com/best.json', {
          headers: {authorization: `Bearer ${token}`, accept: 'application/json'},
          params: {
            limit: 10,
            after: nextAfter,
          }
        });
        setPending(false);
        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...newChildren.map(mapRedditResponse)));
      } catch (error) {
        setPending(false);
        setErrorLoading('Ошибка загрузки');
        console.error(error);
      }
    }

    const observer = new IntersectionObserver(([{isIntersecting}]) => {
      if (!token || !isIntersecting) { return; }
      load();
    }, {
      rootMargin: '100px',
    });

    if (bottomAnchor.current) {
      observer.observe(bottomAnchor.current);
    }

    return () => {
      if (bottomAnchor.current) {
        observer.unobserve(bottomAnchor.current);
      }
    }
  }, [nextAfter, bottomAnchor.current, token]);

  return (
    <ul className={styles.cardsList}>
      {(posts.length === 0 && !pending && !errorLoading) && (
        <div style={{textAlign: 'center'}}>Пусто (╯°□°）╯︵ ┻━┻</div>
      )}

      {posts.map(postData => <Card data={postData} key={postData.id}/>)}

      <div ref={bottomAnchor}/>

      {(pending || errorLoading) && (
        <div style={{textAlign: 'center'}}>
          {pending && (<div>Загрузка...</div>)}
          {errorLoading && (<div style={{color: "red"}}>{errorLoading}</div>)}
        </div>
      )}
    </ul>
  );
}
