import { requestUserExit, setUserId } from './';

const removeCookiesIdThunk = () => {
  return async dispatch => {
    const resolve = await requestUserExit();
    if (resolve.data) {
      dispatch(setUserId(null));
    }
  };
};

export default removeCookiesIdThunk;
