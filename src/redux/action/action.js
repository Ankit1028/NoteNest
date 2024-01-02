import {userName, email, token} from '../constants/constants';
export const userNameValue = payload => ({
  type: userName,
  payload: payload,
});
export const emailValue = payload => ({
  type: email,
  payload: payload,
});
export const tokenValue = payload => ({
  type: token,
  payload: payload,
});
