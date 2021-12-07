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
  id: Math.random().toFixed(36),
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
  const maxAutoLoadsCount = 3;


  const token = useSelector(selectToken);
  const [posts, setPosts] = useState<ICardData[]>([]);
  const [pending, setPending] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [loadMorePressed, setLoadMorePressed] = useState(true);
  const [loadsCount, setLoadsCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  const bottomAnchor = useRef<HTMLDivElement>(null);



  useEffect(() => {

    async function load() {
      try {
        setPending(true);
        setErrorLoading('');
        const {data: {data: {after, children: newChildren}}} = await axios.get('https://oauth.reddit.com/best.json', {
          headers: {authorization: `Bearer ${token}`, accept: 'application/json'},
          params: {
            limit: 6,
            after: nextAfter,
          }
        });
        setPending(false);
        setNextAfter(after);
        setPosts(prevChildren => prevChildren.concat(...newChildren.map(mapRedditResponse)));


        if (loadsCount === (maxAutoLoadsCount - 1)) {
          setLoadsCount(0);
          setLoadMorePressed(false);
        } else {
          setLoadsCount(loadsCount + 1);
        }
        if (after === null) {
          setAllLoaded(true);
        }
      } catch (error) {
        setPending(false);
        setErrorLoading('Ошибка загрузки');
        console.error(error);
      }
    }

    const observer = new IntersectionObserver(([{isIntersecting}]) => {
      if (
        allLoaded ||
        !token ||
        !isIntersecting ||
        !loadMorePressed
      ) { return; }
      console.log('load');
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
  }, [nextAfter, bottomAnchor.current, token, loadMorePressed, loadsCount, allLoaded]);

  return (
    <ul className={styles.cardsList}>
      {(posts.length === 0 && !pending && !errorLoading) && (
        <div style={{textAlign: 'center'}}>Пусто (╯°□°）╯︵ ┻━┻</div>
      )}

      {posts.map(postData => <Card data={postData} key={postData.id}/>)}

      {allLoaded ? (
        <div style={{textAlign: "center"}}>
          Всё (￣o￣) . z Z
        </div>
      ) : (
        <div ref={bottomAnchor}/>
      )}

      {(!loadMorePressed && !allLoaded) && (
        <div style={{display: "flex", justifyContent: 'center'}}>
          <button onClick={() => setLoadMorePressed(true)}>
            Загрузить ещё
          </button>
        </div>
      )}

      {(pending || errorLoading) && (
        <div style={{textAlign: 'center'}}>
          {pending && (<div>Загрузка...</div>)}
          {errorLoading && (<div style={{color: "red"}}>{errorLoading}</div>)}
        </div>
      )}
    </ul>
  );
}
