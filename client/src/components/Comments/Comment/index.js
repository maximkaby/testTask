import React, { Component } from 'react';
import { connect } from 'react-redux';
import Edit from 'components/Edit';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { deleteComment, updateMessage } from "actions/Comment";

const EDIT = 'EDIT';

class Comment extends Component {

  state = {
    isEdit: false,
    editMessage: this.props.data.message,
    recieveData: false
  };



  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log('MyDataTable componentWillReceiveProps')
    this.state.recieveData = true;
    this.state[nextProps.data.id + EDIT] = false;
    this.state.editMessage = nextProps.data.message;
  }

  handleChange = value => event => {
    console.log(event.target.value)
    this.setState({
      [value]: event.target.value
    })
  }

  editHandler = (id, message) => {
    console.log(id, message);
    this.setState({
      [id + EDIT]: !this.state[id + EDIT],
      editMessage: message,
    })
  }

  render() {
    console.log(this.state);
    const { data, deleteComment, updateMessage } = this.props;
    const { editMessage } = this.state;
    console.log(this.state.editMessage, 'comment');
    return (
      <div className="comment">
        <div className="comment__info">
          <div className="comment__icon">
            <CommentIcon />
          </div>
          <div className="comment__msggroup">
            <div className="comment__user">
              UserId: {data.user_id}
            </div>
            <div className="comment__message">
              <Edit
                value={editMessage}
                isEdit={this.state[data.id + EDIT]}
                handleChange={this.handleChange('editMessage')}
              />
            </div>
          </div>
        </div>
        <div className="comment__manage">
          <div className="comment__edit">
            {this.state[data.id + EDIT]
              ? <DoneIcon onClick={(e) => {
                this.handleChange(data.id + EDIT).call(null, e);
                updateMessage(data.id, editMessage);
              }}/>
              : <EditIcon onClick={() => this.editHandler(data.id, editMessage)} />
            }
          </div>
          <div
            className="comment__delete"
            onClick={() => deleteComment(data.id, data.message)}
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, {deleteComment, updateMessage})(Comment);