import React from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Link, withRouter} from 'react-router-dom';


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
  const { classes } = props;

  return (
    <MenuList>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary={
          <a href="#/projects">projects</a>
        } />
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
      </MenuItem>
    </MenuList>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  withStyles(styles)(ListItemComposition)
);