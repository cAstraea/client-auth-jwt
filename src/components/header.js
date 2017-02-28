import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
// show sign out
      return [
        <li className="nav-item" key={4}>
        <Link className="nav-link" to="/signout">Sign out</Link>
            </li>,
        <li className="nav-item" key={3}>
       <Link className="nav-link" to="/devextreme">devextreme</Link>
             </li>
      ];
    } else {
          // show a link to sign in or sign up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign in</Link>
     </li>,
        <li className="nav-item" key={2}>
       <Link className="nav-link" to="/signup">Sign up</Link>
             </li>

      ];
    }
  }
  render() {
    return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
            <ul className="nav navbar-nav">
                {this.renderLinks()}
            </ul>
            </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
