import React, { Component } from 'react';
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
import { addTask } from "actions";


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

class AddTask extends Component {

  state = {
    isOpen: false,
    taskTitle: '',
    taskDescription: ''
  }

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    })
  }

  render() {
    const { classes, projects, addTask } = this.props;
    const { taskTitle, taskDescription } = this.state;
    return (
      <div>
        <Button
          color="primary"
          onClick={() => {this.setState({ isOpen: true })}}>
          Add Task
        </Button>
        <Dialog
          fullWidth
          maxWidth="md"
          open={this.state.isOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle className={`${classes.bgGrey}`} id="form-dialog-title">
            Add Task
          </DialogTitle>
          <DialogContent className={`${classes.bgGrey} ${classes.dialogCont}`}>
            <TextField
              id="taskTitle"
              className="mb-3"
              label="Task name"
              value={this.state.taskTitle}
              onChange={this.handleChange('taskTitle')}
              margin="normal"
            />
            <div>
              <TextField
                id="taskDescription"
                className="mb-3"
                rows="3"
                multiline
                label="Task description"
                value={this.state.taskDescription}
                onChange={this.handleChange('taskDescription')}
                margin="normal"
              />
            </div>
            <div>
              <Button
                color="primary"
                variant="raised"
                onClick={() =>
                  addTask(taskTitle, taskDescription, projects.curProjectId)
                }
              >
                Add task
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

const mapStateToProps = ({ projects }) => {
  return {
    projects
  };
}


export default connect(mapStateToProps, { addTask })(
  withStyles(styles)(AddTask)
);