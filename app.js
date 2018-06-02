const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// MONGOOSE
mongoose.connect(config.database);
// check if the database has been connected
mongoose.connection.on('connected', () =>
{
    console.log('Connected to database! :'+config.database);
});
// check if the database failed to connected
mongoose.connection.on('error', (err) =>
{
    console.log('Database Error'+err);
});

// use express
const app = express();

const users = require('./routes/users');

// port number
const port = 3000;

// use the cors middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

// index route
app.get('/', (req, res) =>
{
    res.send('Invalid Endpoint');
});
// start server
app.listen(port, () => 
{
    console.log('server started on port '+ port);
});