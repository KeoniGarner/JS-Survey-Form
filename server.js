var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/result', function(req, res) {
    var data = {
        name: req.body.name,
        location: req.body.location,
        language: req.body.language,
        comment: req.body.comment,
    }
    res.render('result', data);
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});