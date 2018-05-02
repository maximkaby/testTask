import React, { Component } from 'react';
import { connect } from 'react-redux';

class DevelopersProject extends Component {
  render() {
    const {projects} = this.props;
    if (projects.projects.length == 0) {
      return null;
    }
    let index = projects.projects.findIndex(project => {
      if(project.id === projects.curProjectId)
        return true;
    })
    let project  = projects.projects[index];
    let developers = null;
    if(project.developers_id == null)
      developers = 'none';
    else
      developers = JSON.parse(project.developers_id).join(',');
    return (
      <div className="devproj mb-3">
        Project developers id: {developers}
      </div>
    );
  }
}

const mapStateToProps = ({projects}) => {
  return {projects};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps)(DevelopersProject);