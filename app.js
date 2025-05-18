const express = require('express');
const path = require('path');
const db = require('./db');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const sql = 'INSERT INTO users(name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('MySQL Error:', err); // Log full error
            return res.status(500).json({ message: 'Database error', error: err.message });
        }

        res.status(200).json({ message: 'Data saved successfully' });
    });
});


const viewingRoute = require('./viewData')(db);
app.use('/', viewingRoute);

app.listen(2000);