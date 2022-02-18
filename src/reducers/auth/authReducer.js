import { readFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOCAL_STORAGE_AUTH_KEY } from './constants';

const initialState = {
  isAuthenticated: readFromLocalStorage(LOCAL_STORAGE_AUTH_KEY) || false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      saveToLocalStorage({ key: LOCAL_STORAGE_AUTH_KEY, value: true });
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      saveToLocalStorage({ key: LOCAL_STORAGE_AUTH_KEY, value: false });
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

export const selectAuth = (state) => state.authUser.isAuthenticated;
export const selectUserAuth = (state) => state.authUser.user;
