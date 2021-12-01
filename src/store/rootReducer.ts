import {ActionCreator, AnyAction, Reducer} from "redux";
import {Selector} from "react-redux";
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";


export const SET_TOKEN = 'SET_TOKEN';
export const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: SET_TOKEN,
  token
});
export const selectToken: Selector<RootState, string> = state => state.token;


export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (commentText: string) => ({
  type: UPDATE_COMMENT,
  commentText,
});


export type RootState = {
  commentText: string;
  token: string;
  me: MeState
};
const initialState: RootState = {
  commentText: 'qweasdzxc',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {}
  }
}
export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, token: action.token};
    case UPDATE_COMMENT:
      return {...state, commentText: action.commentText};
    case ME_REQUEST:
    case ME_REQUEST_ERROR:
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    default:
      return  state;
  }
}
