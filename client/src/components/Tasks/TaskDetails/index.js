import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { withStyles } from 'material-ui/styles';
import Comments from 'components/Comments';
import { changeStatus } from "actions/Tasks";
import SetDeveloper from '../SetDeveloper';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});

class TaskDetails extends Component {

  state = {
    age: '',
    name: 'age',
  };

  handleChange = event => {
    const { match, changeStatus } = this.props;
    changeStatus(match.params.id, event.target.value);
    console.log(event.target.name, event.target.value, 'eee');
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { match, tasks, classes } = this.props;
    console.log(this.props, 'TaskDetails');
    let task = tasks.tasksById.get(Number(match.params.id)) || {};
    console.log(task);
    return (
      <div className="taskDetails">
        <div className="taskDetails__title">{task.title}</div>
        <div className="taskDetails__descr">Description</div>
        <div className="taskDetails__description">{task.description}</div>
        <div className="taskDetails__developer">
          Developer:
          {task.developer_id === null
            ? 'none'
            : task.developer_id
          }
        </div>
        <div className="taskDetails__addDeveloper">
          <SetDeveloper taskId={match.params.id} />
        </div>
        <div className="taskDetails__status">
          Status : {task.status}
        </div>
        <div className="taskDetails__changeStatus">
          <FormControl  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Set status</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="waiting">Waiting</MenuItem>
              <MenuItem value="implementation">Implementation</MenuItem>
              <MenuItem value="verifying">Verifying</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="taskDetails__headComments">
          Comments
        </div>
        <div className="taskDetails__comments">
          <Comments />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({tasks}) => {
  return {tasks};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, {changeStatus})(
  withStyles(styles)(TaskDetails)
);