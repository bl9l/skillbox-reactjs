import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState, selectToken} from "../store/rootReducer";
import {IUserData, meRequestAsync} from "../store/me/actions";



export function useUserData() {
  const token = useSelector(selectToken);
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) { return; }
    dispatch(meRequestAsync());
  }, [token]);

  return {data, loading};
}
