const express = require('express');
const cors = require('cors')
const pool = require('./db_settings');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes

app.post('/todos', async (req, res) => {
    try {
        const { name } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (name) VALUES($1) RETURNING *",
            [name]
        );

        res.json(newTodo.rows[0]);

    } catch (e) {
        console.error(e.message)
    }
})

app.get('/todos', async (req, res) => {
    try {
        const getAllTodos = await pool.query(
            "SELECT * FROM todo"
        );

        res.json(getAllTodos.rows);
    } catch (e) {
        console.error(e.message)
    }
})

app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const getTodo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]
        );

        res.json(getTodo.rows[0]);
    } catch (e) {
        console.error(e.message)
    }
})

app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const updateTodo = await pool.query(
            'UPDATE todo SET name = $1 WHERE todo_id = $2',
            [name, id]
        );

        res.json("Todo updated successfully")
    } catch (e) {
        console.error(e.message)
    }
})

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        )

        res.json("Todo deleted successfully")
    } catch (e) {
        console.error(e.message)
    }
})


app.listen(5000, () => {
    console.log('server has started on port 5000')
});