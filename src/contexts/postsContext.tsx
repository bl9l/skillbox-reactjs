import React, {PropsWithChildren} from "react";
import {createContext} from "react";
import {ICardData} from "../shared/CardsList/Card";
import {usePostsData} from "../hooks/usePostsData";

export const postsContext = createContext<ICardData[]>([]);

export const PostsContextProvider = ({children}: PropsWithChildren<{}>) => {
  const [posts] = usePostsData();
  return (<postsContext.Provider value={posts}>
    {children}
  </postsContext.Provider>);
}
