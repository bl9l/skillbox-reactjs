import {useEffect, useState} from "react";
import axios from "axios";


interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData(token: string) {
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: {authorization: `Bearer ${token}`}
    })
      .then(({data: userData}) => setData({name: userData.name, iconImg: userData.icon_img}))
      .catch(console.error);
  }, [token]);

  return [data];
}
