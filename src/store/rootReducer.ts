import {ActionCreator, Reducer} from "redux";
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "./me/actions";
import {MeActions, meReducer, MeState} from "./me/reducer";
import {SET_TOKEN, TokenActions, tokenReducer, TokenState} from "./token";


export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT,
  commentText: string;
};
export const updateComment: ActionCreator<UpdateCommentAction> = (commentText: string) => ({
  type: UPDATE_COMMENT,
  commentText,
});


export type RootState = {
  commentText: string;
  token: TokenState;
  me: MeState
};
const initialState: RootState = {
  commentText: '',
  token: {
    token: '',
  },
  me: {
    loading: false,
    error: '',
    data: {}
  }
}

export type ActionTypes = MeActions | TokenActions | UpdateCommentAction;

export const rootReducer: Reducer<RootState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action)
      };
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
