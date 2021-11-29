import {ActionCreator, AnyAction, Reducer} from "redux";


export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (commentText: string) => ({
  type: UPDATE_COMMENT,
  commentText
});


export type RootState = {
  commentText: string;
};
const initialState = {
  commentText: 'qweasdzxc',
}
export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {...state, commentText: action.commentText}
    default:
      return  state;
  }
}
