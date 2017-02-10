import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    this.props.signinUser({ email, password });
  }
  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
            <label htmlFor="">Email:</label>
            <input {...email} className="form-control" />
        </fieldset>

        <fieldset className="form-group">
            <label htmlFor="">Password:</label>
            <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-submit">Sign in</button>
   </form>);
  }
}

export default reduxForm({
  form: 'signin',
  fields: [ 'email', 'password' ]
}, null, actions)(Signin);
