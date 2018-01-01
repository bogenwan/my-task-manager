// import React, { Component } from 'react';
import React from 'react';
import '../styles/App.css';

const TaskEntry = (props) => {
  return (
    <div>
      <div className="task-entry">
        <span className="task-span">{this.props}Each Task</span>
      </div>
      <button className="complete-button" type="button">Completed</button>
    </div>
  )
}

// class TaskEntry extends Component {
//   constructor (props) {
//     super (props)
//   };

//   render () {
//     return (
//       <div>
//         <div className="task-entry">
//           <span className="task-span">{this.props.eachTask}Each Task</span>
//         </div>
//         <button className="complete-button" type="button">Completed</button>
//       </div>
//     )
//   };
// };

export default TaskEntry;
