import React, { Component } from 'react';
import '../styles/App.css';

class TaskEntry extends Component {
  constructor (props) {
    super (props)
  };

  render () {
    return (
      <div className="task-entry">
        In Task
        <p>{this.props.eachTask}</p>
      </div>
    )
  };
};

export default TaskEntry;
