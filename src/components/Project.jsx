import React, { Component } from 'react';
import '../styles/App.css';
import TaskEntry from './TaskEntry.jsx';
import axiosHelper from './axiosHelper/projectHelper.js';

class Project extends Component {
  constructor (props) {
    super (props)

    this.state = {
      projectName: 'Project name here'
    }
  };

  componentDidMount () {
    axiosHelper.getAllTask()
    .then((resp) => {
      this.setState({
        projectName: resp.data
      });
      console.log(resp.data)
    })
    .catch((err) => {
      console.log(err);
    })
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
