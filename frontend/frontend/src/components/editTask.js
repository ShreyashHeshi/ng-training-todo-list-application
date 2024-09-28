
import React, { useEffect, useState } from 'react';
import TaskForm from './taskForm';
import taskService from '../service/taskService';
import { useParams, useHistory } from 'react-router-dom';

const EditTask = () => {
    const { id } = useParams();
    const history = useHistory();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const data = await taskService.getAllTasks();
                const foundTask = data.find((t) => t.id === parseInt(id));
                setTask(foundTask);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleSaveTask = async (updatedTask) => {
        try {
            await taskService.updateTask(updatedTask.id, updatedTask);
            history.push('/'); // it will redirect to task manager
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    if (!task) return <div>Loading...</div>;

    return (
        <div className="task-manager">
            <h1>Edit Task</h1>
            <TaskForm editingTask={task} onSave={handleSaveTask} />
            <button onClick={() => history.push('/')}>Cancel</button>
        </div>
    );
};

export default EditTask;
