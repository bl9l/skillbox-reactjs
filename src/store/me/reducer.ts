import {Reducer} from "react";
import {
  IUserData,
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccessAction
} from "./actions";

export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData,
}

export type MeActions = MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction;

export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
  switch (action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case ME_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error.toString()
      }
    default:
      return state;
  }
};
