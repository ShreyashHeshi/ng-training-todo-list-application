
import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list-container">
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.assignto}</td>
              <td>{task.status}</td>
              <td>{new Date(task.duedate).toLocaleDateString()}</td>
              <td>{task.priority}</td>
              <td>{task.description}</td>
              <td>
                <button type="button" class="btn btn-secondary" onClick={() => onEdit(task)}>Edit</button> &nbsp;
                <button type="button" class="btn btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
