import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Link } from 'react-router-dom';
import { MenuList } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { fetchTasks } from "actions/Tasks";
import TaskItem from './TaskItem';
import TaskDetails from './TaskDetails';
import DevelopersProject from 'components/Projects/DevelopersProject';
import Checkbox from 'material-ui/Checkbox';

class Tasks extends Component {

  state = {
    tasks: this.props.tasks,
    filteredTasks: this.props.tasks.tasks,
    viewMyTask: false
  }

  componentWillUpdate(nextProps){
    console.log('recieve props');
    this.state.tasks = this.props.tasks;
    this.state.filteredTasks = this.props.tasks.tasks;
  }

  componentWillRecieveProps(nextProps){
    console.log('recieve props');
    this.setState({
      tasks: this.props.tasks,
      filteredTasks: this.props.tasks.tasks
    })
  }

  handleChange = name => event => {
    let filtrTask = [];
    if(event.target.checked) {
      filtrTask = this.state.tasks.tasks.filter(task => {
        if(task.id = this.props.user.id)
          return true;
      })
    } else {
      filtrTask = this.state.tasks.tasks
    }
    this.setState({
      [name]: event.target.checked,
      filteredTasks: filtrTask
    });
  };

  render() {
    const { tasks: { tasks }, filteredTasks } = this.state;
    const { match, user} = this.props;
    console.log(this, 'tasks');
    return (
      <div className="tasks">
        <div className="tasks__title">Tasks</div>
        {user.role === 'developer' ?
          (
            <div> my task
              <Checkbox
                checked={this.state.viewMyTask}
                onChange={this.handleChange('viewMyTask')}
                value="viewMyTask"
                indeterminate
              />
            </div>
          )
          : null
        }
        <DevelopersProject />
        <Paper>
          <Route path={`${match.url}/:id`} exact component={TaskDetails} />
          <Route path={`${match.url}`} exact render={props =>
            <MenuList>
              {filteredTasks.map(value => {
                return (
                  <TaskItem key={value.id} data={value} />
                );
              })}
            </MenuList>
          } />
        </Paper>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchTasks(this.props.projects.curProjectId);
  }
}

const mapStateToProps = ({ projects, tasks, routing, user }) => {
  return {projects, tasks, routing, user};
}

export default connect(mapStateToProps, { fetchTasks })(
  withRouter(Tasks)
);