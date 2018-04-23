import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class Avatar extends Component {
  render() {
    return (
      <Paper>
        <div className="avatar">
          <div className="avatar__icon">
            <img className="avatar__img" src='http://unidadeducativa.org/wp-content/uploads/2014/12/v-01.png' alt=""/>
          </div>
          <div className="avatar_email">
            myemail
          </div>
        </div>
      </Paper>
    );
  }
}
