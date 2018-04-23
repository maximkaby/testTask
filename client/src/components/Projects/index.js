import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="projects__title">Projects</div>
          <ProjectItem />
        </div>
      </div>
    );
  }
}
