import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import { Route, withRouter, Link } from 'react-router-dom';

class TaskItem extends Component {
  render() {
    const { data, match } = this.props;
    console.log(this.props, 'task item');
    return (
      <MenuItem className="task">
        <div className="task__title">
          <Link to={`${match.url}/${data.id}`}>
            {data.title}
          </Link>
        </div>
      </MenuItem>
    );
  }
}

export default withRouter(TaskItem);