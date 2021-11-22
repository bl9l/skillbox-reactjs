import React from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/Layout";
import './main.global.scss';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";

function AppComponent() {
  const [token] = useToken();
  return <Layout>
    <Header token={token}/>
    <Content>
      <CardsList/>
    </Content>
  </Layout>
}

export const App = hot(AppComponent);
