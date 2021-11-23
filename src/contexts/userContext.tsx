import React, {PropsWithChildren} from "react";
import {createContext} from "react";
import {useUserData} from "../hooks/useUserData";

export interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = createContext<IUserContextData>({});


export function UserContextProvider({children}: PropsWithChildren<{}>) {
  const [data] = useUserData();
  return (<userContext.Provider value={data}>
    {children}
  </userContext.Provider>)
}
