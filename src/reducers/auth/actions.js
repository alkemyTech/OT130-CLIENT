import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./constants";

export const getLogin = (data) => {
  return({
    type: LOGIN_SUCCESS,
    payload: data
  })
}
export const getLogout = () => {
  return({
    type: LOGOUT_SUCCESS, 
    payload: null
  })
}