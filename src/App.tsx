import React, {useEffect} from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/Layout";
import './main.global.scss';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {Provider as ReduxProvider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/rootReducer";
import thunk from "redux-thunk";
import {saveToken} from "./store/token";
import {BrowserRouter} from 'react-router-dom';


export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {

  useEffect(() => {
    // @ts-ignore
    store.dispatch(saveToken(window?.localStorage.token || window.__token__));
  }, []);

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Layout>
          <Header/>
          <Content>
            <CardsList/>
          </Content>
        </Layout>
      </BrowserRouter>
    </ReduxProvider>
  )
}

export const App = hot(() => <AppComponent/>);
