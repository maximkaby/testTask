import React, { Component } from 'react';
import Login from 'components/Login';
import Register from 'components/Register';

export default class Entry extends Component {
  render() {
    return (
      <div className="entry">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Login/>
            </div>
            <div className="col-6">
              <Register />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
