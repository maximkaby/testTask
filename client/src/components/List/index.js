import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Cookie from 'util/cookie';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Link, withRouter} from 'react-router-dom';
import {logout} from "actions"

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

function ListItemComposition(props) {
  const { classes, match, logout } = props;

  return (
    <MenuList>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary={
          <Link to={`${match.url}/taskTracker`}>projects</Link>
        } />
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary={
          <Link to="/signIn" onClick={() => {logout()}}>Logout</Link>
        } />
      </MenuItem>
    </MenuList>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {};
}


export default connect(mapStateToProps, {logout})(
  withRouter(
    withStyles(styles)(ListItemComposition)
  )
);