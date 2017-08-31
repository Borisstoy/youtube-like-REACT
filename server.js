const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const newrelic = require('newrelic');

if(process.env.NODE_ENV === "production") {
  app.locals.newrelic = newrelic;
};

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port);
console.log('Server started');

