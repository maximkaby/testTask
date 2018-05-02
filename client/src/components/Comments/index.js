import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchComments } from "actions/Comment"
import AddComment from './AddComment';
import Comment from './Comment';

class Comments extends Component {
  render() {
    const { match, comments } = this.props;
    console.log(comments);
    return (
      <div>
        {comments.map(value => {
          return (
            <Comment key={value.id} data={value} />
          )
        })}
        <AddComment taskId={match.params.id} />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id);
  }
}

const mapStateToProps = ({comments}) => {
  return {comments};
}

export default connect(mapStateToProps, { fetchComments })(
  withRouter(Comments)
);