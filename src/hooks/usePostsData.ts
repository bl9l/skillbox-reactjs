import {useContext, useEffect, useState} from "react";
import {tokenContext} from "../contexts/tokenContext";
import axios from "axios";
import {ICardData} from "../shared/CardsList/Card";

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

export function usePostsData() {
  const token = useContext(tokenContext);
  const [posts, setPosts] = useState<ICardData[]>([]);

  useEffect(() => {
    axios.get('https://oauth.reddit.com/best.json', {
      headers: {authorization: `Bearer ${token}`, accept: 'application/json'},
    })
      .then(({data: {data}}) => {
        const posts = data.children || [];
        setPosts(posts.map(mapRedditResponse));
      })
      .catch(console.error);
  }, [token]);

  return [posts];
}
