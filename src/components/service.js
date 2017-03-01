import axios from 'axios';
import { browserHistory } from 'react-router';

class Service {
  constructor() {
    const service = axios.create({});
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    console.log(error.response);
    switch (error.response.status) {
      case 401:
      // unauth request
        window.localStorage.removeItem('token');
        browserHistory.push('/signout');
        break;
      default:
      // auth server down or some shit
        browserHistory.push('/');
    }
  }
  get(path, callback) {
    return this.service.get(path, { headers: { authorization: window.localStorage.getItem('token') } }).then(
      (response) => {
        callback(response.status, response.data);
      }
    );
  }
  post(path, payload, callback) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response) => { callback(response.status, response.data); }); }
}
export default new Service();
