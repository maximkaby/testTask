import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { MenuItem } from 'material-ui/Menu';
import { ListItemText } from 'material-ui/List';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, setCurProjectId } from 'actions';
import SearchDeveloper from '../SearchDeveloper';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      // backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});


class ProjectItem extends Component {
  render() {
    const { classes, fetchTasks, setCurProjectId, data, match } = this.props;
    console.log(this.props, 'project');
    return (
      <MenuItem
        onClick={() => {
          console.log('MenuItem')
          setCurProjectId(data.id)
          fetchTasks(data.id)
        }}
        className={`${classes.menuItem} project`}
      >
        <Link to={`${match.url}`}>{data.title}</Link>
        <SearchDeveloper projectId={data.id} />
      </MenuItem>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, { setCurProjectId, fetchTasks })(
  withStyles(styles)(ProjectItem)
);