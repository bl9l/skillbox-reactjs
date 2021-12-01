import React, {useEffect} from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/Layout";
import './main.global.scss';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {PostsContextProvider} from "./contexts/postsContext";
import {Provider as ReduxProvider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer, setToken} from "./store/rootReducer";
import thunk from "redux-thunk";


export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {

  useEffect(() => {
    store.dispatch(setToken(window?.localStorage.token || window.__token__));
  }, []);

  return (
    <ReduxProvider store={store}>
      <Layout>
        <Header/>
        <Content>
          <PostsContextProvider>
            <CardsList/>
          </PostsContextProvider>
        </Content>
      </Layout>
    </ReduxProvider>
  )
}

export const App = hot(() => <AppComponent/>);
