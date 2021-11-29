import React from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/Layout";
import './main.global.scss';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./contexts/tokenContext";
import {UserContextProvider} from "./contexts/userContext";
import {PostsContextProvider} from "./contexts/postsContext";
import {Provider as ReduxProvider} from 'react-redux'
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store";

export const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  return (
    <ReduxProvider store={store}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header/>
            <Content>
              <PostsContextProvider>
                <CardsList/>
              </PostsContextProvider>
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </ReduxProvider>
  )
}

export const App = hot(() => <AppComponent/>);
