import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { loginUser } from "actions";
import {Link} from 'react-router-dom';

class Login extends Component {

  state = {
    password: '',
    email: ''
  }

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    });
  }

  render() {
    const {loginUser} = this.props;
    const {email, password} = this.state;
    console.log(this.props, 'login');
    return (
      <div className="login">
        <div className="login__title">
          Login
        </div>
        <TextField
          id="email"
          className="mb-3"
          label="Email"
          value={email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          id="pass"
          className="mb-3 mr-2"
          label="Password"
          value={password}
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <Link to="/app/taskTracker">
          <Button
            onClick={() => {loginUser(email, password)}}
            color="primary"
            variant="raised"
          >
            Login
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {user};
}


export default connect(mapStateToProps, {loginUser})(Login);