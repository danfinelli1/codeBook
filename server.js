'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

var Recipe = require('./model/recipes');
var User = require('./model/users');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/solslaptopiswarm');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 30 * 60 * 1000 }
}));

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

router.route('/recipes/:recipe_id')
  .put(function(req, res) {
    Recipe.findById(req.params.recipe_id, function(err, recipe) {
      if (err)
        res.send(err);
        (req.body.title) ? recipe.title = req.body.title : null;
        (req.body.content) ? recipe.content = req.body.content : null;
        (req.body.language) ? recipe.language = req.body.language : null;
        recipe.save(function(err){
          if (err)
           res.send(err);
          res.json({ message: 'Recipe has been updated'})
        });
    });
  })

  .delete(function(req, res){
    Recipe.findById(req.params.recipe_id, function(err, recipe) {
      if (err)
        res.send(err);
        recipe.remove(function(err){
          if (err)
           res.send(err);
          res.json({ message: 'Recipe has been removed'})
        });
    });
  })


router.route('/users')
  .post(function(req, res){
    console.log(req.body)
    User.createSecure(req.body.email, req.body.password, function (err, newUser) {
      req.session.userId = newUser._id;
      res.json();
   });
 });

router.route('/sessions')
  .post(function(req, res){
    User.authenticate(req.body.email, req.body.password, function (err, loggedInUser) {
     if (err){
       console.log('authentication error: ', err);
       res.status(500).send();
     } else {
       console.log('setting sesstion user id ', loggedInUser._id);
       req.session.userId = loggedInUser._id;
       res.json();
     }
  });
});

router.route('/profile')
  .get(function(req, res){
    User.findOne({_id: req.session.userId}, function (err, currentUser) {
      res.json()
      });
  });


app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
