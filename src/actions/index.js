import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function (dispatch) {
 // submit email/pass to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then((reponse) => {
 // if request is good update state user is authenticated
      dispatch({ type: AUTH_USER });
 // save the jwt token
    //   localStorage.setItem('token', response.data.token);
       console.log(response.data.token);

 // redirect to the route
      browserHistory.push('/feature');
    })
    .catch(() => {
 // if request is bad

 // show error
    });
  };
}
