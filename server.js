var express = require('express');
var path = require('path');
var app = express();
var multer = require('multer');
var upload = multer({dest: './uploads'});

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.redirect('/static/index.html');
});

app.post('/filesubmit', upload.single('attachment'),  function(req, res) {
  res.json(req.file.size);
});

app.listen(process.env.PORT || 8080);
