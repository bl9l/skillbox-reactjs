import {ActionCreator, AnyAction, Reducer} from "redux";
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "./me/actions";
import {MeActions, meReducer, MeState} from "./me/reducer";
import {SET_TOKEN, TokenActions, tokenReducer, TokenState} from "./token";


export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (commentText: string) => ({
  type: UPDATE_COMMENT,
  commentText,
});


export type RootState = {
  commentText: string;
  token: TokenState;
  me: MeState
};
const initialState: RootState = {
  commentText: 'qweasdzxc',
  token: {
    token: '',
  },
  me: {
    loading: false,
    error: '',
    data: {}
  }
}

export type ActionTypes = MeActions | TokenActions;

export const rootReducer: Reducer<RootState, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action)
      };
/*    case UPDATE_COMMENT:
      return {...state, commentText: action.commentText};*/
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
