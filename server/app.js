// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');
// const path = require('path');

// const app = express(); 
// app.use(cors());
// app.use(express.json()); // Add this line to parse JSON bodies
// app.use(express.static(path.join(__dirname, 'build')));
// app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

// const PORT = process.env.PORT || 8080;

// // MySQL connection setup
// const connection = mysql.createConnection({
//     host: 'sql5.freesqldatabase.com',
//     user: 'sql5720171',
//     database: 'sql5720171',
//     port: 3306,
//     password: 'CDRH3FaeGF',
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error("Failed to connect to MySQL: ", err);
//         return;
//     }
//     console.log("Connected to MySQL");
// });

// // Endpoint to fetch plants from MySQL database
// app.get('/api/plants', (req, res) => {
//     const query = 'SELECT * FROM plant';
//     connection.query(query, (error, results) => {
//         if (error) {
//             console.error("Error executing MySQL query: ", error);
//             res.status(500).json({ error: "Error executing MySQL query" });
//             return;
//         }
//         res.json(results);
//     });
// });

// // // This endpoint was mimicking your database respo
// // // Catch-all handler to serve React app for unknown routes
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'build')));
app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

const PORT = process.env.PORT || 8080;

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5720171',
    database: 'sql5720171',
    port: 3306,
    password: 'CDRH3FaeGF',
});

connection.connect(function (err) {
    if (err) {
        console.error("Failed to connect to MySQL: ", err);
        return;
    }
    console.log("Connected to MySQL");
});

// Endpoint to fetch plants from MySQL database
app.get('/api/plants', (req, res) => {
    const query = 'SELECT * FROM plant';
    connection.query(query, (error, results) => {
        if (error) {
            console.error("Error executing MySQL query: ", error);
            res.status(500).json({ error: "Error executing MySQL query" });
            return;
        }
        res.json(results);
    });
});

// Catch-all handler to serve React app for unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
