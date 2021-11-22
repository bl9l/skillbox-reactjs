import React, {useEffect, useState} from 'react';
import styles from './searchblock.scss';
import {UserBlock} from "../UserBlock";
import axios from "axios";

interface ISearchBlockProps {
  token: string;
}

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock({token}: ISearchBlockProps) {
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: {authorization: `Bearer ${token}`}
    })
      .then(({data: userData}) => setData({name: userData.name, iconImg: userData.icon_img}))
      .catch(console.error);
  }, [token]);


  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name}/>
    </div>
  );
}
