import {ActionCreator, AnyAction, Reducer} from "redux";
import {Selector} from "react-redux";


export const SET_TOKEN = 'SET_TOKEN';
export const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: SET_TOKEN,
  token
});
export const selectToken: Selector<RootState, string> = state => state.token;


export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (commentText: string) => ({
  type: UPDATE_COMMENT,
  commentText
});


export type RootState = {
  commentText: string;
  token: string;
};
const initialState = {
  commentText: 'qweasdzxc',
  token: '',
}
export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, token: action.token};
    case UPDATE_COMMENT:
      return {...state, commentText: action.commentText};
    default:
      return  state;
  }
}
