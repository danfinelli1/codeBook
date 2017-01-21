'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Recipe = require('./model/recipes');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;
mongoose.connect('mongodb://localhost/codeBook');
//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent recipes
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

router.route('/recipes')
  .get(function(req, res){
    Recipe.find(function(err, recipes){
      if (err)
       res.send(err);
      res.json(recipes)
    });
  })

  .post(function(req, res){
    var recipe = new Recipe();
    recipe.title = req.body.title;
    recipe.content = req.body.content;
    recipe.language = req.body.language;

    recipe.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Recipe successcully added!' });
    });
  });

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
