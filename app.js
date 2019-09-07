// external dependences: node modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);



// node core libraries
const path = require('path');
const fs = require('fs');

// internal imports
const APIkeys = require('./magic');
const MONGO_URI = APIkeys.MONGO_URI;

const store = new MongoDBStore({
    uri: MONGO_URI,
    collection: 'sessions'
});


// internal imports
// controllers

// initialize and configure app
const app = express();
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

app.set('view engine', 'ejs');
app.set('views', 'views');

// request response cycle
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index');
});

app.use((req, res, next) => {
    res.render('error');
})

mongoose.connect(MONGO_URI)
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});