import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {registerUser} from "actions/User";

class Register extends Component {

  state = {
    password: '',
    email: '',
    role: 'manager',
    name: '',
    surname: ''
  }

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    });
  }

  render() {
    const {user} = this.props;
    const { password, email, role, name, surname } = this.state;
    const {registerUser} = this.props;
    console.log(this.state, 'register');
    console.log(user, 'user register');
    return (
      <div className="register">
        <div className="register__title">
          Register
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
        <TextField
          id="pass"
          className="mb-3 mr-2"
          label="Name"
          value={name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="pass"
          className="mb-3 mr-2"
          label="Surname"
          value={surname}
          onChange={this.handleChange('surname')}
          margin="normal"
        />
        <FormControl className="mb-3">
          <InputLabel htmlFor="age-simple">Set status</InputLabel>
          <Select
            value={this.state.role}
            onChange={this.handleChange('role')}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="manager">Manager</MenuItem>
            <MenuItem value="developer">Developer</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={() => {registerUser(email, password, role, name, surname)}}
          color="primary"
          variant="raised"
        >
          Register
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {user};
}


export default connect(mapStateToProps, {registerUser})(Register);