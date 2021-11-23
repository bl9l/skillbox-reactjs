import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../contexts/tokenContext";


interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const [data, setData] = useState<IUserData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: {authorization: `Bearer ${token}`}
    })
      .then(({data: userData}) => setData({name: userData.name, iconImg: userData.icon_img}))
      .catch(console.error);
  }, [token]);

  return [data];
}
