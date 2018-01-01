import React, { Component } from 'react';
import '../styles/App.css';
import TaskEntry from './TaskEntry';

class Project extends Component {
  constructor (props) {
    super (props)

    this.state = {
      projectName: 'Project name here'
    }
  };


  render () {
    return (
      <div className="project-container">
        <h1>{this.state.projectName}</h1>
        <div className="task-container">
          <TaskEntry />
        </div>
      </div>
    )
  };
};

export default Project;
