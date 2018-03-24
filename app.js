const EXPRESS = require('express')
const APP = EXPRESS()
const PATH = require('path')

const bodyParser = require("body-parser")



var data = [];




APP.listen(3000, ()=>{console.log('Server started on port 3000')})

APP.get('/', function(req, res){
    res.sendFile(PATH.join(__dirname+`/index.html`));
});

//Midleware
APP.use(bodyParser.urlencoded({ extended: false}));
APP.use(bodyParser.json());

//endpoints o rutas

APP.get('/signup', function (req, res){
    res.sendFile(PATH.join(__dirname+`/views/signup.html`))
})

APP.get('/login', function (req, res){
    res.sendFile(PATH.join(__dirname+`/views/login.html`))
})

APP.post('/signup', function (req, res){
    var newUser= {
        email: req.body.email,
        password: req.body.password
    }
    data.push(newUser);
    localStorage.setItem('user',data[0].email)

})

APP.post('/login', function (req, res){
    console.log(req.body.email)
    console.log(req.body.password)
    localStorage.getItem('user')

})