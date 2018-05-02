import React, { PureComponent } from 'react';
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
import { setDeveloper, searchDeveloper } from "actions";


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

class SetDeveloper extends PureComponent {

  state = {
    isOpen: false,
    developerName: '',
    developerSurname: ''
  }

  handleChange = value => event => {
    const { searchDeveloper } = this.props;
    if (value === 'developerName')
      searchDeveloper(event.target.value, this.state.developerSurname);
    else searchDeveloper(this.state.developerName, event.target.value);

    this.setState({
      [value]: event.target.value
    });
  }

  render() {
    const { classes, developers, taskId } = this.props;
    const { developerName } = this.state;
    console.log('from dev')
    return (
      <div onClick={e => {e.stopPropagation()}}>
        <Button
          color="primary"
          variant="raised"
          onClick={() => {this.setState({ isOpen: true })}}>
          Set Developer
        </Button>
        <Dialog
          fullWidth
          maxWidth="md"
          open={this.state.isOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle className={`${classes.bgGrey}`} id="form-dialog-title">
            Set developer
          </DialogTitle>
          <DialogContent className={`${classes.bgGrey} ${classes.dialogCont}`}>
            <TextField
              id="developerName"
              className="mb-3 mr-2"
              label="Developer name"
              value={this.state.developerName}
              onChange={this.handleChange('developerName')}
              margin="normal"
            />
            <TextField
              id="developerSurname"
              className="mb-3"
              label="Developer surname"
              value={this.state.developerSurname}
              onChange={this.handleChange('developerSurname')}
              margin="normal"
            />
            <div className="devs">
              {developers.map(developer => {
                return (
                  <div key={developer.id}>
                    <span className="mr-3">{developer.name}</span>
                    <Button
                      color="primary"
                      onClick={() => this.props.setDeveloper(developer.id, taskId)}
                    >
                      Set developer
                    </Button>
                  </div>
                )
              })}
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

const mapStateToProps = ({developers}) => {
  return {developers};
}


export default connect(mapStateToProps, { setDeveloper, searchDeveloper })(
  withStyles(styles)(SetDeveloper)
);