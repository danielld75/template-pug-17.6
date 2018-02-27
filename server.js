const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index.pug');
});

app.get('/auth/google', function(req, res){
  res.render('./auth/google');
});

app.get('/auth/authorize', function(req, res){
  const response = {
    user: req.query.user,
    password: req.query.password
  };
  res.send(JSON.stringify(response));
});

const server = app.listen(3000, 'localhost', function(){
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Serwer nasłuchuje na serwerze: ${host} oraz porcie: ${port}`);
});