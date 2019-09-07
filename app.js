// external dependences: node modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// node core libraries
// const path = require('path');
// const fs = require('fs');

// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = 'mongodb+srv://node_project:cMrLLAlzhLBfX2Ug@summer-2019-fo8l7.mongodb.net/messages';
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
// const csrfProtection = csrf();



// internal imports
// controllers
// const loggerRoutes = require('./routes/logger_routes');

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
// app.use(csrfProtection);
// app.use(flash());

app.set('view engine', 'ejs');
app.set('views', 'views');

// request response cycle
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res, next) => {
    res.render('index');
})

// app.use(loggerRoutes);

// app.use((req, res, next) => {
    // res.render('error');
// })

mongoose.connect(MONGODB_URI)
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});