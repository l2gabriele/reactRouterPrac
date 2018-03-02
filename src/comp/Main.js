import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Main extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to the Main Page!</h1>
        <Link to="/"><button>Back to Login</button></Link>
      </div>
    )
  }
}
