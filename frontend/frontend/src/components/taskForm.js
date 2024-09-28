
import React, { useState, useEffect } from 'react';

const TaskForm = ({ editingTask, onSave }) => {
  const [task, setTask] = useState({
    name: '',
    assignto: '',
    status: 'NOT STARTED',
    duedate: '',
    priority: 'NORMAL',
    description: ''
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    resetForm();
  };

  // Reset form after saving a task
  const resetForm = () => {
    setTask({
      name: '',
      assignto: '',
      status: 'NOT STARTED',
      duedate: '',
      priority: 'NORMAL',
      description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <table className="table">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Task Name"
                value={task.name}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="assignto"
                className="form-control"
                placeholder="Assign To"
                value={task.assignto}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <select name="status" className="form-control" value={task.status} onChange={handleChange} required>
                <option value="NOT STARTED">Not Started</option>
                <option value="INPROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="date"
                name="duedate"
                className="form-control"
                value={task.duedate}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <select name="priority" className="form-control" value={task.priority} onChange={handleChange} required>
                <option value="LOW">Low</option>
                <option value="NORMAL">Normal</option>
                <option value="HIGH">High</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <textarea
                name="description"
                className="form-control"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit" className="btn btn-primary">{editingTask ? 'Update Task' : 'Add Task'}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default TaskForm;
