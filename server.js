const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const Person = require('./models/Person');

app.get('/', (req, res) => {
    res.send("Welcome to my hotel...How can I help you?, we have list of menus")
})

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})