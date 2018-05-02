import React, { Component } from 'react';
import AddProject from './AddProject';
import AddTask from './AddTask';
import Projects from 'components/Projects';
import Tasks from 'components/Tasks';

export default class TaskTracker extends Component {
  render() {
    return (
      <div className="taskTrack">
        <div className="container">
          <div className="row">
            <AddProject />
            <AddTask />
          </div>
          <div className="row">
            <div className="col-3">
              <Projects />
            </div>
            <div className="col-9">
              <Tasks />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
