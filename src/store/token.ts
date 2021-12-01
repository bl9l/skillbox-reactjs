import {Reducer} from "react";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./rootReducer";
import {Selector} from "react-redux";


export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

export type TokenState = {
  token: string;
};
export const tokenReducer: Reducer<TokenState, SetTokenAction> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state;
  }
}

export const selectToken: Selector<RootState, string> = state => state.token.token;

export type TokenActions = SetTokenAction;

export const saveToken = (token: TokenState['token']): ThunkAction<void, RootState, unknown, Action<string>> =>
    dispatch => dispatch(setToken(token));
