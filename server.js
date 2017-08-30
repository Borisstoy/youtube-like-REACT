var express = require('express');
const path = require('path');
var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/public'));

// set the view engine to jsx
app.set('view engine', 'js');

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
