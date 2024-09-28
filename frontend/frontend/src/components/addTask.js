
import React from 'react';
import TaskForm from './taskForm';
import taskService from '../service/taskService';
import { useHistory } from 'react-router-dom';

const AddTask = () => {
    const history = useHistory();

    const handleSaveTask = async (task) => {
        try {
            await taskService.createTask(task);
            history.push('/'); // it will redirect to task manager
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    return (
        <div className="task-manager container mt-4">
            <h1 className="text-center">Add Task</h1>
            <div className="card">
                <div className="card-body">
                    <TaskForm onSave={handleSaveTask} />
                    <button
                        className="btn btn-secondary mt-3"
                        onClick={() => history.push('/')}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
