import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import {addComment} from "actions";
import { withRouter } from 'react-router-dom';

class AddComment extends Component {

  state = {
    comment: ''
  }

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    })
  }

  render() {
    console.log(this.props, 'comment');
    const { addComment, user, taskId } = this.props;
    const { comment } = this.state;
    return (
      <div>
        <div>
          <TextField
            id="addComment"
            className="mb-3"
            rows="3"
            multiline
            label="Add comment"
            value={this.state.comment}
            onChange={this.handleChange('comment')}
            margin="normal"
          />
        </div>
        <div>
          <Button
            color="primary"
            variant="raised"
            onClick={() => {
              console.log('lol')
              addComment(comment, user.id, taskId)
            }}
          >
            Send
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({user, routing}) => {
  return {user, routing};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}
export default connect(mapStateToProps, {addComment})(AddComment);