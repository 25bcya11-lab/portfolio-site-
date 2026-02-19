const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// IMPORTANT: This serves your index.html automatically
app.use(express.static('public'));

// The POST route that matches your form 'action'
app.post('/transmit', (req, res) => {
    // These names come from the 'name' attribute in your HTML
    const { name, email, message } = req.body;

    const sql = "INSERT INTO contact_messages (name_entry, secure_email, data_packet) VALUES (?, ?, ?)";
    
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            return res.status(500).send("TRANSMISSION_ERROR: Connection dropped.");
        }
        // Redirect or send a success message
        res.send("<h1>>> SIGNAL_RECEIVED: I'll get back to you soon.</h1>");
    });
});

app.listen(3000, () => console.log('Listening on port 3000'));