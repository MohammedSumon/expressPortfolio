var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET products  page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Featured Work' });
});

/* GET services page. */
router.get('/Services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
