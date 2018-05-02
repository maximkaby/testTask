import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

class Avatar extends Component {
  render() {
    let { user } = this.props;
    return (
      <Paper>
        <div className="avatar">
          <div className="avatar__icon">
            <img className="avatar__img" src='http://unidadeducativa.org/wp-content/uploads/2014/12/v-01.png' alt=""/>
          </div>
          <div className="avatar_email">
            {user.email}
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
}

export default connect(mapStateToProps)(Avatar);