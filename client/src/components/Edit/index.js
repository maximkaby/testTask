import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import TextField from "material-ui/TextField";

export default class Edit extends Component {
  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    });
  }

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    const { initValue, isEdit, value }  = this.props;
    console.log('Edit');
    return (
      <div style={{display: 'inline-block'}}>
        {!isEdit ?
          <Typography>{value}</Typography>
          :
          <TextField
            rows="3"
            multiline
            inputRef={el => this.editInput = el}
            value={value}
            onChange={this.props.handleChange}
          />
        }
      </div>
    );
  }

  componentDidUpdate() {
    if(this.props.isEdit) {
      let length = this.editInput.value.length === 0 ? 1 : this.editInput.value.length;
      this.editInput.size = length;
    }
  }

}
