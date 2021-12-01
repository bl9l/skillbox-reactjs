import React from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/Layout";
import './main.global.scss';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./contexts/userContext";
import {PostsContextProvider} from "./contexts/postsContext";
import {Provider as ReduxProvider} from 'react-redux'
import {Action, applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer, RootState} from "./store";
import thunk, {ThunkAction} from "redux-thunk";


export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

const timeout = (ms: number): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
  dispatch({type: 'START'});
  setTimeout(() => dispatch({type: 'FINISH'}), ms);
}

function AppComponent() {

  // @ts-ignore
  store.dispatch(timeout(3000));

  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  )
}

export const App = hot(() => <AppComponent/>);
