const express = require('express');
const http = require('http');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const db = require('./dataBase').getInstance();
db.setModels();

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

let {usersRouter} = require('./router');

app.use('/users', usersRouter);

server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
