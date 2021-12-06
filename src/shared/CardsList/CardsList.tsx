import React, {useEffect, useState} from 'react';
import styles from './cardslist.scss';
import {Card, ICardData} from "./Card";
import axios from "axios";
import {useSelector} from "react-redux";
import {selectToken} from "../../store/token";
import {IPostData} from "../../hooks/usePostsData";


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

  useEffect(() => {
    if (!token) { return; }

    async function load() {
      try {
        setPending(true);
        setErrorLoading('');
        const {data: {data: {children}}} = await axios.get('https://oauth.reddit.com/rising/', {
          headers: {authorization: `Bearer ${token}`, accept: 'application/json'},
        });
        setPending(false);
        setPosts(children.map(mapRedditResponse));
      } catch (error) {
        setPending(false);
        setErrorLoading('Ошибка загрузки');
        console.error(error);
      }
    }

    load();
  }, [token]);

  return (
    <ul className={styles.cardsList}>
      {(posts.length === 0 && !pending && !errorLoading) && (
        <div style={{textAlign: 'center'}}>Пусто (╯°□°）╯︵ ┻━┻</div>
      )}

      {posts.map((postData, index) => <Card data={postData} key={index}/>)}

      {(pending || errorLoading) && (
        <div style={{textAlign: 'center'}}>
          {pending && (<div>Загрузка...</div>)}
          {errorLoading && (<div style={{color: "red"}}>{errorLoading}</div>)}
        </div>
      )}
    </ul>
  );
}
