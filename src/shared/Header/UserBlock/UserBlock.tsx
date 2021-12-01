import React from 'react';
import styles from './userblock.scss';
import {Icon, Icons} from "../../Icon";
import {EColors, Text} from "../../utils/Text";


interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading: boolean;
}

export function UserBlock({avatarSrc, username, loading}: IUserBlockProps) {
  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=qweasdzxc&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}
    >
      {avatarSrc
        ? <img src={avatarSrc} alt="avatar" className={styles.avatar}/>
        : <Icon icon={Icons.AvatarAnon} size={50}/>
      }
      {loading ? (
        <Text size={20} color={EColors.gray99}>Загрузка</Text>
      ) : (
        <Text size={20} color={username ? EColors.black : EColors.gray99}>{username || 'Аноним'}</Text>
      )}
    </a>
  );
}
