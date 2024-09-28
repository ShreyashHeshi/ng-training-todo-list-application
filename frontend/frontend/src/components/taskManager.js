
import React, { useState, useEffect } from 'react';
import TaskForm from './taskForm';
import TaskList from './taskList';
import taskService from '../service/taskService';
import '../styles/tasks.css';
import { useHistory } from 'react-router-dom';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const data = await taskService.getAllTasks();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleSaveTask = async (task) => {
        // This is handled in AddTask and EditTask components
    };

    const handleDeleteTask = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            try {
                await taskService.deleteTask(id);
                fetchTasks();
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        }
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        history.push(`/edit/${task.id}`); // it will move to edit page
    };

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            <button type="button" class="btn btn-primary ms-auto" onClick={() => history.push('/add')}>Add Task</button>
        </div>
    );
};

export default TaskManager;
