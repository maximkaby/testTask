import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import TaskTracker from './TaskTracker';
import 'styles/index.scss';
import 'styles/bootstrap.scss'
import AppBar from 'components/AppBar';
import List from 'components/List';
import Avatar from 'components/Avatar';
import Paper from 'material-ui/Paper';

export default class App extends Component {
  render() {
    let { match } = this.props;
    console.log(this.props, 'App');
    return (
      <div className="app-main" style={{width: '100%'}}>
        <Paper>
          <div className="side-bar">
            <Avatar />
            <List />
          </div>
        </Paper>
        <div className="main">
          <AppBar />
          <div className="app-main-contain-wrapper">
            <Route path={`${match.url}/taskTracker`} component={TaskTracker}/>
          </div>
        </div>
      </div>
    );
  }

}
