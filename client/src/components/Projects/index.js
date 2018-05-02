import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import { fetchProjectsRequest, fetchProjectDev } from "actions";
import { MenuList } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';


class Projects extends Component {
  render() {
    const { projects: { projects: projectsArr }, match } = this.props;
    console.log('projects', this.props);
    return (
      <div className="projects">
        <div className="projects__title">Projects</div>
        <Paper>
          <MenuList>
            {projectsArr.map(value => {
              return (
                <ProjectItem key={value.project_id} match={match} data={value} />
              )
            })}
          </MenuList>
        </Paper>
      </div>
    );
  }

  componentDidMount() {
    if(this.props.user.role === 'developer')
      this.props.fetchProjectDev();
    else
      this.props.fetchProjectsRequest();
  }
}

const mapStateToProps = ({ projects, user }) => {
  return { projects, user };
}


export default connect(mapStateToProps, { fetchProjectsRequest, fetchProjectDev })(
  withRouter(Projects)
);