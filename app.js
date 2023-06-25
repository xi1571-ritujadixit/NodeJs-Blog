// inside app.js, we are going to make the web server which we are going to visit from the browser.
require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
// process.env.PORT is used to tell where the application can be access from on the server.
// 5000 port is for local use.
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));

// Templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})