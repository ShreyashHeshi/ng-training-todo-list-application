const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const connection = require("./dbconnect/dbConnection");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


// API routes
app.get('/api/tasks', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
            return res.status(500).send('internal server error');
        }
        res.send(results);
    });
});

app.post('/api/tasks', (req, res) => {
    const { id, name, assignto, status, duedate, priority, description } = req.body;
    connection.query('INSERT INTO tasks(id,name,assignto,status,duedate,priority,description) VALUES(?,?,?,?,?,?,?)', [id, name, assignto, status, duedate, priority, description], (err, results) => {
        if (err) {
            return res.status(500).send('internal server error while adding');
        }
        res.send(req.body);
    });
});

app.put('/api/tasks/:id', (req, res) => {
    const id = req.params.id;
    const { name, assignto, status, duedate, priority, description } = req.body;
    connection.query('UPDATE tasks SET name=?,assignto=?,status=?,duedate=?,priority=?,description=? WHERE id = ?', [name, assignto, status, duedate, priority, description, id], (err, result) => {
        if (err) {
            return res.status(500).send("internal server error while updating");
        } if (result.affectedRows === 0) {
            return res.status(404).send({ message: "user not found" });
        }
        res.send(req.body);
    });
});

app.delete('/api/tasks/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).send('Internal server error');
        } if (result.affectedRows === 0) {
            return res.status(404).send('user not found');
        }
        res.send(result);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
