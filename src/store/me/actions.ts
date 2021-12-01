import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState, selectToken} from "../rootReducer";
import axios from "axios";


export interface IUserData {
  name?: string;
  iconImg?: string;
}


export const ME_REQUEST = 'ME_REQUEST';
export type MeRequestAction = {
  type: typeof ME_REQUEST;
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST,
});


export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';
export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData,
}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data,
});


export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: Error;
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: Error) => ({
  type: ME_REQUEST_ERROR,
  error,
});


export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const token = selectToken(getState());
  dispatch(meRequest());
  axios.get('https://oauth.reddit.com/api/v1/me', {
    headers: {authorization: `Bearer ${token}`}
  })
    .then(({data: userData}) =>
      dispatch(meRequestSuccess({name: userData.name, iconImg: userData.icon_img})))
    .catch(error => {
      console.error(error);
      dispatch(meRequestError(error));
    });
}

