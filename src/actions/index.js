import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, INVALIDATE_USER, FETCH_MESSAGE } from './types';
import Service from '../components/service';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function (dispatch) {
 // submit email/pass to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then((response) => {
 // if request is good update state user is authenticated
      dispatch({ type: AUTH_USER });
 // save the jwt token
      window.localStorage.setItem('token', response.data.token);

 // redirect to the route
      browserHistory.push('/devextreme');
    })
    .catch(() => {
 // if request is bad
      dispatch(authError('Bad login info'));
 // show error
    });
  };
}

export function signupUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
    .then((response) => {
      dispatch({
        type: AUTH_USER
      });
      window.localStorage.setItem('token', response.data.token);
      browserHistory.push('/devextreme');
    })
     .catch((error) => {
       dispatch(authError(error.response.data.error));
     });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  window.localStorage.removeItem('token');
  return {
    type: INVALIDATE_USER
  };
}

export function fetchMessage() {
  return (dispatch) => {
    return (
        Service.get(ROOT_URL,
        (status, data) => {
          //  dispatch fetch message
          dispatch({
            type: FETCH_MESSAGE,
            payload: data.message
          });
        }
        )
      );
  };
}
