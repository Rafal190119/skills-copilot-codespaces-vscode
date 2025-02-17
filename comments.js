// create web server
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments.json');

const app = express();

app.use(bodyParser.json());

// get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// add a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});