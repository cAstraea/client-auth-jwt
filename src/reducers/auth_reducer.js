import { AUTH_USER, INVALIDATE_USER, AUTH_ERROR } from '../actions/types';
export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case INVALIDATE_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default: return state;
  }
}
