import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login to Main Page</h1>
        <Link to="/home"><button>Login</button></Link>
      </div>
    )
  }
}
