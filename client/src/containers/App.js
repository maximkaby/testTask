import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import MainApp from 'app/index';
import { fetchUserRequest } from "actions";
import Entry from 'components/Entry';

function Confirm() {
  return (
    <div>confirm email please</div>
  );
}

class App extends Component {

  state = {
    redirected: false
  }

  render() {
    const {redirected} = this.state;
    const {match, location, user } = this.props;
    console.log(user, location, 'user');
    if(user.isAuth && user.confirmed === false)
      return <Confirm />;
    else if(user.isAuth && user.confirmed && !redirected && location.pathname !== '/app/taskTracker'){
      this.state.redirected = true;
      return ( <Redirect to={'/app/taskTracker'}/> );
    }
    else if(!user.isAuth && location.pathname !== '/signIn')
      return ( <Redirect to={'/signIn'}/> );

    return (
      <div className="app-main">
        <Route path={`${match.url}confirm`} component={Confirm}/>
        <Route path={`${match.url}app`} component={MainApp}/>
        <Route path={`${match.url}signIn`} component={Entry}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchUserRequest();
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
};


export default connect(mapStateToProps, {fetchUserRequest})(App);


