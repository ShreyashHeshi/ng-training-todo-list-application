// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskManager from './components/taskManager';
import AddTask from './components/addTask';
import EditTask from './components/editTask';

const App = () => {
  return (
    <Router>
      <h1 style={{ textAlign: 'center' }}>TO-DO List</h1>
      <Switch>
        <Route path="/" exact component={TaskManager} />
        <Route path="/add" component={AddTask} />
        <Route path="/edit/:id" component={EditTask} />
      </Switch>
    </Router>
  );
};

export default App;
