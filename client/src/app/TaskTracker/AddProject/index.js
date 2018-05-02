import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { addProject } from "actions/Projects";


const styles = theme => ({
  bgGrey: {
    backgroundColor: '#f8f9fa'
  },
  dialogAct: {
    margin: '0',
    padding: '8px 4px'
  },
  dialogCont: {
    minHeight: '250px'
  },
  colName: {
    marginBottom: '8px',
    '& > div > input::placeholder': {
      fontSize: '16px'
    },
    '& > div > input': {
      lineHeight: '1.1875em'
    }
  }
})

class AddProject extends Component {

  state = {
    isOpen: false,
    projectName: ''
  }

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    })
  }

  render() {
    const { classes, user } = this.props;
    const { projectName } = this.state;
    if(user.role === 'developer')
      return null;
    return (
      <div>
        <Button
          color="primary"
          onClick={() => {this.setState({ isOpen: true })}}>
          Add Project
        </Button>
        <Dialog
          fullWidth
          maxWidth="md"
          open={this.state.isOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle className={`${classes.bgGrey}`} id="form-dialog-title">
            Add project
          </DialogTitle>
          <DialogContent className={`${classes.bgGrey} ${classes.dialogCont}`}>
            <DialogContentText className="mb-2">
              description
            </DialogContentText>
            <TextField
              id="projectName"
              className="mb-3"
              label="Project name"
              value={this.state.projectName}
              onChange={this.handleChange('projectName')}
              margin="normal"
            />
            <div>
              <Button
                color="primary"
                variant="raised"
                onClick={() => this.props.addProject(projectName)}
              >
                Add project
              </Button>
            </div>
          </DialogContent>
          <DialogActions
            classes={{root: classes.dialogAct}}
            className={`${classes.bgGrey}`}
          >
            <Button
              onClick={() => {this.setState({isOpen: false})}}
              color="primary"
            >
              cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AddProject.defaultProps = {
  user: {}
}

const mapStateToProps = ({user}) => {
  return {user};
}


export default connect(mapStateToProps, { addProject })(
  withStyles(styles)(AddProject)
);