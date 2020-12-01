const express = require('express');
const rootDir = require('./util/path');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // templating engine used here is ejs
app.set('views', 'views');
app.get('/', (req, res, next) => {
  res.render('index');
});
app.get('/about', (req, res, next) => {
  res.render('about');
});
app.get('/blog', (req, res, next) => {
  res.render('blog');
});
app.get('/cause_details', (req, res, next) => {
  res.render('cause_details');
});
app.get('/cause', (req, res, next) => {
  res.render('cause');
});
app.get('/contact', (req, res, next) => {
  res.render('contact');
});
app.get('/elements', (req, res, next) => {
  res.render('elements');
});
app.get('/main', (req, res, next) => {
  res.render('main');
});
app.get('/single-blog', (req, res, next) => {
  res.render('single-blog');
});
app.listen(80);
